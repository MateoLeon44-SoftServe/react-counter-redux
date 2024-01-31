import {configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
        // If there's another slice, you'll have to add it here
    }
})

export default store