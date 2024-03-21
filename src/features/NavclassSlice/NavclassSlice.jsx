import { createSlice } from '@reduxjs/toolkit'

export const NavclassSlice = createSlice({
  name: 'navclass',
  initialState: {
    value: "home"
  },
  reducers: {
    changeClass: (state, action) => {
        state.value = action.payload
        console.log(state.value);
    },
  },
})

export const { changeClass } = NavclassSlice.actions

export default NavclassSlice.reducer