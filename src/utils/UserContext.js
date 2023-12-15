
import { createContext } from "react";  

const UserContext=createContext({
    loggedInUser:"Default User",
    online:false
});


export default UserContext;
// Now you can access this context anywhere inside your app 
