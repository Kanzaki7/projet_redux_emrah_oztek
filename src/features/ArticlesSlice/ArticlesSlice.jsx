import { createSlice } from '@reduxjs/toolkit'
import sweets from '../../sweetTrolley.json'

export const ArticlesSlice = createSlice({
  name: 'articles',
  initialState: {
    value: sweets
  },
  reducers: {
    arrayArticles: (state, action) => {
        state.value = sweets.filter(l => l.name.toLowerCase().includes(action.payload.toLowerCase()))
        console.log(state.value);
    },
  },
})

export const { arrayArticles } = ArticlesSlice.actions

export default ArticlesSlice.reducer