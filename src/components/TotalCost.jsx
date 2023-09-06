import {useEffect, useState} from 'react'
export const TotalCost = () => {
    const [totalCost, setTotalCost] = useState(23500);

    useEffect(() => {
        localStorage.setItem('total', totalCost);
    }, [totalCost])
    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Total Cost: </h3>
            <h2>
                {totalCost} ₺
            </h2>
        </div>
    )
};

