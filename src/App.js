import React, { useState, Suspense, lazy, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import ResInfo from './components/ResInfo'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'
// This will create a routing configuration for us

// Chunking 
// Code Splitting
// Dynamic Bundling
//  lazy loading
// on demand loading 
// dynamic import
// Importing this component only when it is required
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    // authentication 
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // Make an API call to get the username and password of user 
        const data = {
            name: "Divyam Garg"
        }

        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ ...useContext(UserContext), loggedInUser: userName, setUserName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

// Now we are creating routing configuration inside our appRouter
// Configuration means some information that will define what will happen on the specific route
// Outlet is basically a component provided by react-router-dom and this outlet will be filled/replaced with the children component according to the path of the element present in that children

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <ResInfo />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
            }
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); // Here we are rendering the app directly
root.render(<RouterProvider router={appRouter} />)

