import {DayCount} from "../components/DayCount";
import {TotalCost} from "../components/TotalCost";
import {DailyCost} from "../components/DailyCost";
import {DailyCostChart} from "../components/DailyCostChart";
import {Profile} from "../components/Profile.jsx";
import {excelReader} from "../utils/utils.js";
import {useEffect} from "react";

export const Dashboard = () => {

    useEffect(() => { console.log(localStorage.getItem('excelData'))}, [localStorage.getItem('excelData')])

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection:'column', margin: '.5rem 5rem', gap: '10%'}}>
            <div className='centered'>
                <h2> Sports International Dashboard</h2>
            </div>
            <input type="file" accept=".xlsx" onChange={excelReader}/>
            <div style={{ flex: 1, display: 'flex', gap: '1%', alignItems: 'center', margin: '.5rem'}}>
                <Profile/>
                <TotalCost/>
            </div>
            <div style={{ flex: 1, display: 'flex', gap: '1%', alignItems: 'center',  margin: '.5rem'}}>
                <DayCount/>
                <DailyCost/>
            </div>
            <div style={{ flex: 1, display: 'flex', margin: '.5rem'}}>
                <DailyCostChart/>
            </div>
        </div>
    )
};