import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    value: [
        {nom: "email", input: "wizard"},
        {nom: "password", input: "password"},
        {nom: "etat", input: "login"},
    ]
  },
  reducers: {
    auth: (state, action) => {
        if (state.value[0].input === action.payload.email && state.value[1].input === action.payload.password) {
            state.value[2].input = "logout"
        } else {
            state.value[2].input = "login"
        }
    },
  },
})

export const { auth } = LoginSlice.actions

export default LoginSlice.reducer