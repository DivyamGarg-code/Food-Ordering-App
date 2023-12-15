import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { IMG_URL } from '../utils/constants'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items); // subscribed to the small portion of the store
    console.log(cartItems);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    
    return (
        <div className='mx-auto my-6 p-2 max-w-[1000px]'>
            <h1 className='font-bold text-xl text-center'>Cart</h1>
            <button className='p-2 m-2 bg-slate-400 rounded-md' onClick={handleClearCart}>Clear Cart</button>

            {cartItems.length===0?<h1>Cart is Empty | Add Items to the Cart</h1>:<ItemList items={cartItems} />}
        </div>
    )
}

export default Cart;
