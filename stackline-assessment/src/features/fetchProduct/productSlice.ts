import { createSlice } from "@reduxjs/toolkit"

interface ProductState {
  data: any
  error: any
  loading: boolean
}

const initialState = {
  data: [],
  error: null,
  loading: false,
} as ProductState

// Slice
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    fetchProductData: (state) => {
      state.loading = true
      state.error = null
    },
    getFetchSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    getFetchError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchProductData, getFetchSuccess, getFetchError } =
  productSlice.actions
export default productSlice.reducer
