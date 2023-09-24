import {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

export const DayCount = () => {
    const {schedule} = useSelector(state => state.rootReducer);
    const [dayCount, setDayCount] = useState(1);

    useEffect(() => {
        if(schedule.length > 0){
            setDayCount(schedule.length)
        }
    }, [schedule]);

    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Total Day:</h3>
            <h2>
                {dayCount}
            </h2>
        </div>
    )
};

