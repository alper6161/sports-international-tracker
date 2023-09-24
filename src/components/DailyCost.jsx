import {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

export const DailyCost = () => {
    const {totalCost, schedule} = useSelector(state => state.rootReducer);
    const [dailyCost, setDailyCost] = useState(0);

    useEffect(() => {
        if(schedule?.length > 0 && totalCost) {
            setDailyCost(Math.round(totalCost / schedule.length * 100) / 100)
        }
    }, [totalCost, schedule])

    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Daily Cost: </h3>
            <h2>
                {dailyCost} ₺
            </h2>
        </div>
    )
};

