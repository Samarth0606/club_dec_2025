import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[]
  },
  reducers: {
    addItem: (state) => {
      
    },
    removeItem: (state) => {
      
    },
    clearCart: (state, action) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer