import { cartActionTypes } from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (currentState = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...currentState,
                hidden: !currentState.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return{
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...currentState,
                cartItems: removeItemFromCart(currentState.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...currentState,
                cartItems: clearItemFromCart(currentState.cartItems, action.payload)
            };
        default:
            return currentState;
    }
}

export default cartReducer;