import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: WeeklySales[];
}

export interface WeeklySales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ProductState {
  data: any[];
  error: string | undefined;
  loading: boolean;
}

const initialState = {
  data: [],
  error: undefined,
  loading: false,
} as ProductState;

export const getProduct = createAsyncThunk("/", async () => {
  const response = await fetch("stackline_product_data.json").then((data) =>
    data.json()
  );
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = ""
      state.data = action.payload[0]
    })
    .addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    })
  },
});

export default productSlice.reducer
