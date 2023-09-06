import {Avatar} from "@mui/material";
import AvatarImage from "../assets/images/Avatar.jpg";

export const Profile = () => {

    return (
        <div className="widget centered" style={{display: 'flex', flexDirection: 'row'}}>
            <Avatar alt="Alperen" src={AvatarImage} sx={{ width: 126, height: 126 }}/>
            <div style={{marginLeft: '3rem'}}>
                <div>
                    <span style={{fontWeight: 'bold', marginRight: '.5rem'}}> Name: </span>
                    <span>Alperen Ustaömer</span>
                </div>
                <div>
                    <span style={{fontWeight: 'bold', marginRight: '.5rem'}}> Age: </span>
                    <span>27</span>
                </div>
                <div>
                    <span style={{fontWeight: 'bold', marginRight: '.5rem'}}> Height: </span>
                    <span>1.90</span>
                </div>
                <div>
                    <span style={{fontWeight: 'bold', marginRight: '.5rem'}}> Weight: </span>
                    <span>115</span>
                </div>
            </div>
        </div>
    )
};

