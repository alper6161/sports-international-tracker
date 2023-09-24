import {useSelector} from "react-redux";

export const TotalCost = () => {
    const {totalCost} = useSelector(state => state.rootReducer);

    return (
        <div className="widget centered">
            <h3 style={{fontWeight: 'bold'}}> Total Cost: </h3>
            <h2>
                {totalCost} ₺
            </h2>
        </div>
    )
};

