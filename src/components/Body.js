import React, { useState, useEffect,useContext } from 'react'
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObj from "../utils/mockData";
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';

/* Whenever a state variable updates react triggers a reconcilliation cycle(re-renders the component)
Never call use State hook outside functional component or in the loop ,if elese condition
 as it has a specific pupose
// It is used for creating local state variables inside your functional components
*/
const Body = () => {
    const onlineStatus = useOnlineStatus();
    const [listofRestaurants, setlistofRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    // if no dependency array => useEfffect is called on every render
    // if dependency array is empty []=> useEfffect is called on initial render (just once)
    // if dependency array is [variable]=> useEfffect is called everytime as the variable changes
    useEffect(() => {
        fetchData();
    }, []); // will work on first render after rendering the component for the first time
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        ); // This will fetch data from the 
        // It will return a promise and we will wait for the promise to be resolved
        const json = await data.json();

        setlistofRestaurants(resObj.infoWithStyle.restaurants);
        setfilteredRestaurants(resObj.infoWithStyle.restaurants);
        console.log(resObj.infoWithStyle.restaurants);
        // console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info?); // optional chaining
    }
    const filterData = () => {
        console.log("Filter is clicked");
        setfilteredRestaurants(listofRestaurants.filter(res => res.info.avgRating > 4.4));
    }
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromoted = withPromotedLabel(RestaurantCard);
    const searchEventHandler = (e) => {
        const text = e.target.value;
        // console.log(e.target.value);
        setSearchText(e.target.value);
        console.log(text);
        // setlistofRestaurants(resList.current.filter(res => res.info.name.toLowerCase().includes(text.toLowerCase())));
    }
    const {loggedInUser,setUserName}=useContext(UserContext);
    if (onlineStatus === false) {
        return (
            <h2>Looks like you're offline !! Please check your internet connection</h2>
        );
    }
    return (
        <div className="body">
            <div className="btn-container">
                <div className='search-container'>
                    <input type="text" className='search-box' value={searchText} onChange={searchEventHandler} />
                    <div className="btn" onClick={() => { setfilteredRestaurants(listofRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))) }}>Search</div>
                </div>
                <div className="btn" onClick={filterData}>Top Rated Restaurants</div>
                <label >UserName : <input type="text" className='border border-black rounded-sm p-1' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/></label>
                
            </div>
            <div className="res-container">
                {(listofRestaurants.length === 0) ? <Shimmer /> : filteredRestaurants.map((restaurant) =>
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        {restaurant.info.promoted?<RestaurentCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;