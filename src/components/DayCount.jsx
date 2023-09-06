import {useEffect, useState} from 'react'

export const DayCount = () => {
    const [dayCount, setDayCount] = useState(4);

    useEffect(() => {
        localStorage.setItem('dayCount', dayCount);
    }, [dayCount]);

    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Total Day:</h3>
            <h2>
                {dayCount}
            </h2>
        </div>
    )
};

