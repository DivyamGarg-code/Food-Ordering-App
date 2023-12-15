/**
 * Header
 * - Logo 
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurentCard
 *      - Img
 *      - Name of res
 *      - Star rating
 *      - Cusines
 *      - Location
 * Footer
 * - Copyright
 * - Links 
 * - Address
 * - Contact
 */

Two types of Export/Import

Default Export/Import : For Single Component or variable
Named  Export/Import : For Multiple Components or variables

export default Component;
import Component from "path";

Named Export/Import

export const Component;
import {Component} from "path*;

# React Hooks 
(Normal JS utility functions)
use State : Whenever the state variable updates react will rerender the component
use Effect : 
- no dependency array => Use effect will be called after every component render
- empty dependency array => Use effect will be called only first time as the component renders just once
- dependency array not empty => Only be called when the dependency changes

# Routing
# 2 types Routing in web apps
- Client Side Routing [using react-router-dom]
// Here we are not making any kind of network calls while we are navigating b/w the pages because all the components are already loaded inside our app when the app loaded for the first time

- Server Side Routing
// This means let suppose you have home.html, about.html, contact.html and clicking on anchor tag it reloads the whole page it sends the network call to about.html and fetches that html and display on the screen 

# Link -> component given by the react-router-dom which use the anchor tag behind the scenes

# Higher Order Component
- Higher order component is a function that takes existing components and enhance/modify it and returns it back 

## Lifting State UP ⬇️
# Controlled Component
# Uncontrolled Component
- When the child components are controlled by the parent component
- for example a menu card having different categories as accordian in which the list items are shown/hidden on toggle
- if the categories have the access to show/hide the list items it will not be able to keep the track of its neighbouring items so as to hide automatically so it comes under the category of uncontrolled components
- but if I give this control of show/hide to its parent component then it can keep a track ofthe list items which are open and closed so this comes under the category of controlled components

# Important Note : 
In React, it's important to understand that the order in which you define hooks and variables can matter. The general rule is that you should define your hooks at the top level of your functional component, before any conditional statements, loops, or other JavaScript code. This is because React relies on the order of hooks to maintain their state between renders.

# Prop Drilling 
Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.
Real case example - Let suppose we require the login information of the user to be used by the multiple components in that case we can use the "useContext Hook" to share data between deeply nested components

Context is like a central store where we can keep the data which could be used independently by multiple components.
It solves the problem of prop drilling as then we dont need to pass the props to each and every component
Context -> global space that ca be provided to whole app or just the small portion of the app,we can create multiple context,overide it etc
createContext -> to create the context 
useContext -> to store the context data in a variable
contextProvider-> UserContext.Provider to update the user context data

# Important -
If you want to change some text from the children and its effect to be visible in the parent you have to define the useState hook inside the parent and pass it as a prop to the children where that prop is then changed to make the effect visible on the parent 
For eg. in useContext Hook we have created a searchbar where on typing anything the effect get visible on the header as well as body 

# Differences:

# Scope:
useContext is React Hook for simpler state management within the component tree.
Redux is a state management library that provides a global store that can be accessed from any part of the application.

# Complexity:
useContext is simpler and suitable for smaller applications or components that don't require complex state management.
Redux introduces more concepts and may have a steeper learning curve, but it excels in managing complex state in larger applications.

# State Updates:
useContext relies on component re-renders triggered by state changes within the context.
Redux uses actions and reducers to update the state in a predictable and centralized manner.

# Similarities:
Both useContext and Redux provide a way to manage state in React applications.
They aim to solve the problem of state management in a more organized and scalable manner compared to just using local component state.

# Redux works in the data layer of the application
- Redux is primarily used to manage the state of the application 
- Redux helps to debugg our application 

# Redux Toolkit
- Install 2 libraries @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app 
- Slice (cartSlice)
- dispatch(action)
- Selector (Hook inside the react - normal js function coming from the react redux library)

# Types of Testing (Developer end)
- Unit Testing : You test your react components in isolation.
- Integration Testing : Testing the integration of the components, let suppose components are dependent on each other eg when you apply filter to search the items so many components interacted to get the filtered data
- End To End Testing - e2e testing : Testing all the flow of the application as soon as the user enters and leave 

# Setting Up testing in our application 
- Install React Testing library 
- Install Jest 
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration - npx jest --init | npx will just execute the code
- Install  @babel/preset-react - to make JSX work in test cases
- Include  @babel/preset-react - inside my babel config
- Install @testing-library/jest-dom


- JSDOM is a library which parses and interacts with assembled HTML just like a browser. The benefit is that it isn't actually a browser. Instead, it implements web standards like browsers do. You can feed it some HTML, and it will parse that HTML.
