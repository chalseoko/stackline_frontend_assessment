import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import data from './stackline_frontend_assessment_data_2021.json'


export const store = configureStore({
  reducer: {
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

