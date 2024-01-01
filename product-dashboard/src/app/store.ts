import {ThunkAction, UnknownAction, configureStore } from "@reduxjs/toolkit"
import productReducer from "../features/getProduct/productSlice"

export const store = configureStore({
  reducer: {
    product: productReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = Promise<string>> = ThunkAction<
ReturnType,
RootState,
unknown,
UnknownAction
>