import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart"

const initialCartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems') as string)
    : [];

const initialState: CartItem[] = initialCartItems;

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.amount += 1;
                localStorage.setItem('cartItems', JSON.stringify(state));
            } else {
                state.push({ ...action.payload, amount: 1 });
                localStorage.setItem('cartItems', JSON.stringify(state));
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.findIndex(item => item.id === action.payload.id);

            if (index === -1) {
                return state;
            }

            if (state[index].amount === 1) {
                const newState = [...state.slice(0, index), ...state.slice(index + 1)];
                localStorage.setItem('cartItems', JSON.stringify(newState));
                
                return newState;
            }

            const newState = [...state];
            newState[index] = { ...newState[index], amount: newState[index].amount - 1 };

            localStorage.setItem('cartItems', JSON.stringify(newState));

            return newState;
        },
        emptyCart: (state) => {
            state.length = 0
            localStorage.removeItem('cartItems')
        },
    }

})

const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartReducer