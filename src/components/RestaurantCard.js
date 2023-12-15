import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
// not using keys (not acceptable) <<< index as key <<<<<< unique id (best practice)

const RestaurantCard = (props) => {
    // const { name, img, cusisines, star_rating, location } = props.resData; // Access resData from props
    const { name, locality, cloudinaryImageId, areaName, cuisines, avgRating } = props.resData.info;
    const {loggedInUser}=useContext(UserContext);
    return (<div className="res-card">
        <div className="res-img-container">
            <img src={IMG_URL + cloudinaryImageId} alt="error" />
        </div>
        <span>{name}</span>
        <div className='star-rating-container'>
            <img src={require("../images/star_rating.png")} alt="error" />
            <span>{avgRating}</span>
        </div>
        <span>{cuisines.join(', ')}</span>
        <span>{areaName}</span>
        <span>User : {loggedInUser}</span>
    </div>);
}

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (<div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>);
    }
}