import { useDispatch } from "react-redux";
import { IMG_URL } from '../utils/constants';
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an item
        dispatch(addItem(item)); // now this item will go inside the action.payload
        // it will pass {payload:item}
        // console.log("Item Clicked",item.card.info.name);
    }
    return (
        <div>
            {items.map((item) => {
                return <div key={item.card.info.id} className='p-2 border-b-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex flex-col gap-2 max-w-lg'>
                            <span className='font-semibold'>{item.card.info.name}</span>
                            <span >₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
                            <span className='text-sm text-gray-600'>{item.card.info.description}</span>
                        </div>
                        <div className='w-[90px] h-[90px] shadow-lg relative'>
                            <img className="w-full rounded-lg " src={IMG_URL + item.card.info.imageId} alt="error" />
                            <button className='px-1 rounded bg-white absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-max' onClick={() => { handleAddItem(item) }}>Add +</button>

                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default ItemList;
