import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '../features/LoginSlice/LoginSlice';
import NavclassSlice from '../features/NavclassSlice/NavclassSlice';
import ArticlesSlice from '../features/ArticlesSlice/ArticlesSlice';
import CartSlice from '../features/CartSlice/CartSlice';



const store = configureStore({
	reducer: {
        login: LoginSlice,
        navclass: NavclassSlice,
        articles: ArticlesSlice,
        cart: CartSlice,
    },
})

export default store;