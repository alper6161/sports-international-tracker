import {LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const DailyCostChart = () => {
    const target = 500;

    const data = [
        {
            name: '1 Sept',
            dailyCost: 23500,
            target
        },
        {
            name: '2 Sept',
            dailyCost: 23500 / 2,
            target
        },
        {
            name: '3 Sept',
            dailyCost: 23500 / 3,
            target
        },
        {
            name: '4 Sept',
            dailyCost: 23500 / 4,
            target
        }
    ];

    return (
        <div className="widget centered" style={{ minHeight: '25rem', padding: '2rem'}}>
            <h3>Daily Cost Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
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
                    <Line type="monotone" dataKey="dailyCost" stroke="white" />
                    <Line type="monotone" dataKey="target" stroke="#ffcccb" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

