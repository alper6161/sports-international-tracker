import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const DailyCostChart = () => {
    const {schedule, totalCost} = useSelector(state => state.rootReducer);
    const [chartData, setChartData] = useState([]);
    const target = 500;

    useEffect(() => {
        if(schedule.length > 0){
            setChartData(schedule.map((date, index) => ({
                name: date,
                dailyCost: Math.round(totalCost / (index + 1) * 100) / 100,
                target
            })));
        }
    }, [schedule])


    return (
        <div className="widget centered" style={{ minHeight: '25rem', padding: '2rem'}}>
            <h3>Daily Cost Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background: 'black'}}/>
                    <Legend />
                    <Line type="monotone"  dataKey="dailyCost" stroke="red" />
                    <Line type="monotone" dataKey="target" stroke="#ffcccb" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

