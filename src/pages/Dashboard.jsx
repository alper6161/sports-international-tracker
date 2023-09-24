import {DayCount} from "../components/DayCount";
import {TotalCost} from "../components/TotalCost";
import {DailyCost} from "../components/DailyCost";
import {DailyCostChart} from "../components/DailyCostChart";
import {Profile} from "../components/Profile.jsx";
import {ExcelUploader} from "../components/ExcelUploader.jsx";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {TOTAL_COST} from "../utils/constants.js";
import {setTotalCost} from "../redux/reducers/totalCost.js";

export const Dashboard = () => {
    const dispatch = useDispatch();

    const [isExcelUploaded, setIsExcelUploaded] = useState(false);

    useEffect(() => {
        dispatch(setTotalCost(TOTAL_COST));
    }, []);

    return (
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', margin: '.5rem 5rem', gap: '10%'}}>
            <div className='centered'>
                <h2> Sports International Dashboard</h2>
            </div>
            <ExcelUploader onExcelUploaded={() => setIsExcelUploaded(true)}/>
            <div style={{flex: 1, display: 'flex', gap: '1%', alignItems: 'center', margin: '.5rem'}}>
                <Profile/>
                {
                    isExcelUploaded && <TotalCost/>
                }
            </div>
            {
                isExcelUploaded &&
                <>
                    <div style={{flex: 1, display: 'flex', gap: '1%', alignItems: 'center', margin: '.5rem'}}>
                        <DayCount/>
                        <DailyCost/>
                    </div>
                    <div style={{flex: 1, display: 'flex', margin: '.5rem'}}>
                        <DailyCostChart/>
                    </div>
                </>
            }
        </div>
    )
};