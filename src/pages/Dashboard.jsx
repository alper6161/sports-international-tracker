import {DayCount} from "../components/DayCount";
import {TotalCost} from "../components/TotalCost";
import {DailyCost} from "../components/DailyCost";
import {DailyCostChart} from "../components/DailyCostChart";
import {Profile} from "../components/Profile.jsx";

export const Dashboard = () => {
    return (
        <div style={{ flex: 1, display: 'flex', flexDirection:'column', margin: '.5rem 5rem', gap: '10%'}}>
            <div className='centered'>
                <h2> Sports International Dashboard</h2>
            </div>
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