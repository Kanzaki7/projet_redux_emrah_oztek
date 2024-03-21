import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [
        
    ]
  },
  reducers: {
    addCart: (state, action) => {

      const itemPresent = state.value.find((item) => item.name === action.payload.name)
      if (itemPresent) {
        itemPresent.quantity += 1;
        itemPresent.total = itemPresent.quantity*itemPresent.price
      } else {
        state.value.push({...action.payload, quantity:1})
      }
    },
    deleteCart: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    checkOut: (state) => {
      state.value.splice(0)
    },
    plusUn: (state, action) => {
      state.value[action.payload].quantity += 1
      state.value[action.payload].total = state.value[action.payload].price*state.value[action.payload].quantity
    },
    moinsUn: (state, action) => {
      state.value[action.payload].quantity -= 1
      state.value[action.payload].total = state.value[action.payload].price*state.value[action.payload].quantity
    }
    },
  },
)

export const { addCart, deleteCart, checkOut, plusUn, moinsUn } = CartSlice.actions

export default CartSlice.reducer