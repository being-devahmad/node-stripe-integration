import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// AsyncThunk Midleware
export function fetchProducts() {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log("error fetching products: ", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
