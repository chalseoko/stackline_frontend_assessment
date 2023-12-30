import { createSlice } from "@reduxjs/toolkit"

export interface Product {
  title: string
  image: string
  subtitle: string
  tags: string[]
  sales: WeeklySales[]
}

export interface WeeklySales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ProductState {
  data: any[]
  error: string | undefined
  loading: boolean
}

const initialState = {
  data: [],
  error: undefined,
  loading: false,
} as ProductState

// Slice
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    fetchProductData: (state) => {
      state.loading = true
      state.error = undefined
    },
    getFetchSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    getFetchError: (state, action) => {
      state.data = []
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchProductData, getFetchSuccess, getFetchError } =
  productSlice.actions
export default productSlice.reducer