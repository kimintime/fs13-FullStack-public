import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart"

const initialState: CartItem[] = []

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            let isInCart = false
            let cartAmount = 1

            state.forEach(item => {
                if (item.id === action.payload.id) {
                    isInCart = true
                    cartAmount += item.amount
                }

                return item
            })

            const newItem: CartItem = {...action.payload, amount: cartAmount }
            
            if (isInCart) {
                return (
                    state.map(item => 
                        item.id === action.payload.id ? newItem : item))

            } else {

                return [...state, newItem]
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            let cartAmount = 0

            state.forEach(item => {
                if ( item.id === action.payload.id) {
                    cartAmount = item.amount
                }
            })

            if (cartAmount === 1) {
                return state.filter(item => item.id !== action.payload.id)

            } else {

                let newItem: CartItem = {...action.payload, amount: cartAmount - 1 }

                return (
                    state.map(item => 
                        item.id === action.payload.id ? newItem : item)
                )
            }
        },
        emptyCart: (state) => {
            state.length = 0
        },
    }

})

const cartReducer = cartSlice.reducer
export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions
export default cartReducer