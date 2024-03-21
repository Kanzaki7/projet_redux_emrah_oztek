import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '../features/LoginSlice/LoginSlice';
import NavclassSlice from '../features/NavclassSlice/NavclassSlice';


const store = configureStore({
	reducer: {
        login: LoginSlice,
        navclass: NavclassSlice,
    },
})

export default store;