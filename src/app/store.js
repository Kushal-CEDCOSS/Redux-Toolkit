import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// console.log("red=> ",counterReducer)

export const store = configureStore({
  reducer: {
    coun : counterReducer,
  },
})