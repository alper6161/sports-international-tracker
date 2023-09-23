import {useEffect, useState} from 'react'
export const DailyCost = () => {
    const [totalCost, setTotalCost] = useState(0);
    const [dayCount, setDayCount] = useState(1);
    useEffect(() => {
        if(localStorage.getItem('total') && localStorage.getItem('dayCount')){
            setTotalCost(localStorage.getItem('total'));
            setDayCount(localStorage.getItem('dayCount'));
            console.log(localStorage.getItem('excelData'));
        }
    }, [])
    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Daily Cost: </h3>
            <h2>
                {totalCost / dayCount} ₺
            </h2>
        </div>
    )
};

