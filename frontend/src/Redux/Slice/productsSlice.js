import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  }
 
  export const fetchProducts = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      return data
    }
  )


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{ 
        builder.addCase(fetchProducts.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.isLoading = false
          state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
        })
      },
     
    
})

export default productsSlice.reducer




