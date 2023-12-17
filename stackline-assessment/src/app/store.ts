import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import productReducer from "../features/counter/counterSlice"

// const data = require('./../data/stackline_frontend_assessment_data_2021.json');

export const store = configureStore({
  reducer: {
    // productData: productReducer,
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

// function productReducer(state = data , action) {
//   switch (action.type) {
//     // some code here.. 
//   }
// }