import { createSlice } from "@reduxjs/toolkit"

// It will return an object in the cartSlice in this format
/*
{
    actions:{},
    reducer: ..
    ...
}
 */
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { // This function gets access to the state(initial state) as well the action and it will modify the state based upon the action
            // Vanilla (older) Redux => Dont Mutate State
            // const newState=[...state];
            // newState.items.push(action.payload)
            // return newState

            // Redux Tookit 
            // We have to mutate the state
            state.items.push(action.payload);
            // internally redux uses immer library for handling immutable states behind the scene 
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        }

    }
});

// console.log(cartSlice);
// You've to export 2 things actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/*
Behind the scenes the cartSlice will have the big object 
{
    actions :{
        addItem
    },
    reducer
}
 */

