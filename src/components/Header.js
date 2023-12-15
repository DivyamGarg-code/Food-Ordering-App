import React, { useState,useContext } from 'react'
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
//This useSelector hook will give us access to use/read the redux store
// Subscribing to the store using a selector
// It will navigate to different page without reloading the whole page

const Header=()=> {
    const onlineStatus=useOnlineStatus();
    const [auth, setauth] = useState("Login");
    console.log("Header ",useContext(UserContext));
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>{
        console.log(store);
        return store.cart.items;
    });
    // console.log(cartItems);
    return (
        <div className='header'>
            <img className='logo-container w-14 h-14' src={LOGO_URL} alt="error" />
            <div className='nav-items'>
                <div className='font-bold'>{onlineStatus?<span style={{color:"green"}}>Online</span>:<span style={{color:"red"}}>Offline</span>}</div>
                <div><Link to='/'>Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <div><Link to="/grocery">Grocery</Link></div>
                <div className='font-bold'><Link to="/cart">Cart ({cartItems.length})</Link></div>
                <div>{loggedInUser}</div>
                <div className="btn" onClick={()=>auth==="Login"?setauth("Logout"):setauth("Login")}>{auth}</div>
            </div>
        </div>
    );
}
export default Header;

/*
In React, when a component's state changes, the component will re-render. However, this doesn't necessarily mean that the entire DOM tree of the component will re-render. React is smart about optimizing updates to the DOM, and it attempts to update only the parts of the DOM that have actually changed.

In your code, when the auth state changes, the component will re-render, but React will perform a virtual DOM diffing process to determine which parts of the DOM need to be updated. It will then update only those specific parts of the DOM that have changed.

In your specific example, the "Home," "About," "Contact," and "Cart" items in the div elements won't change when the auth state changes, so React will not re-render or update those parts of the DOM. Only the content of the div with the "btn" class, which displays the login/logout button text, will be updated when auth changes.

React's reconciliation algorithm is efficient and minimizes unnecessary DOM updates, so you don't need to worry too much about performance issues caused by re-rendering the entire component. React is designed to handle these kinds of updates efficiently.
 */