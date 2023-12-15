import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

// This component is only concerned about displaying the data 
// We will be creating custom hook to fetch the data and storing it in a variable
const ResInfo = () => {
    // const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    const setIndex=(index)=>{
        setShowIndex(index);
    }
    const dummy="Dummy Data";
    // useEffect(() => {
    //     fetchMenu();
    // }, [])
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API_URL+resId);
    //     const json = await data.json();
    //     setresInfo(json.data);
    // }
    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const n = resInfo.cards.length - 1
    const { itemCards } = resInfo?.cards[n]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo.cards[n].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    // console.log(categories);
    // console.log(showIndex);
    // const handleCategoryClick = (index) => {
    //     setShowIndex(index);
    // }
    return (
        <div className='menu_cards p-4'>
            <h1 className='font-bold text-xl'>{name}</h1>
            <h3 className='font-bold text-lg'>{`${cuisines.join(",")} - ${costForTwoMessage}`}</h3>
            {categories.map((category, index) => <RestaurentCategory
                key={category.card.card.title}
                data={category}
                showItems={index === showIndex}
                index={index}
                showIndex={showIndex}
                setIndex={setIndex}
            />)}
        </div>
    );
}

export default ResInfo

const RestaurentCategory = ({ data, showItems,index,showIndex,setIndex}) => {
    // console.log(data.card.card);
    const { title, itemCards } = data.card.card;
    handleOnClick=()=>{
        console.log(showIndex,index);
        if(showIndex===index){
            setIndex(null);
            // console.log(showIndex);
        }else{
            setIndex(index);
        }
    }
    return (
        <div className={`accordian_container ${showItems ? 'open' : ''} shadow-lg`}>
            <div className='accordian_header' onClick={handleOnClick}>
                <span>{title} ({itemCards.length})</span>
                <div className={`accordian_arrow`}></div>
            </div>
            {showItems && <div className="accordian_body"><ItemList items={itemCards} /></div>}
        </div>
    );
}



