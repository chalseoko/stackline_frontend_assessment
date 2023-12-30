import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import productSlice from "../features/product/productSlice"

export const store = configureStore({
  reducer: productSlice,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>