import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlice'

export const store = configureStore({
  reducer: studentReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch