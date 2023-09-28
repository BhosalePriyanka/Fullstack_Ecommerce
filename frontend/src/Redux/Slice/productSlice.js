import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    product: [],
      isLoading: false,
      error: null,
    }

export const fetchProduct = createAsyncThunk(
      'content/fetchProduct',
      async (id) => {
        const res = await axios(`https://fakestoreapi.com/products/${id}`)
        const data = await res.data
        return data
      }
    )
  

const productSlice = createSlice({
      name: 'product',
      initialState,
      reducers: {
      removeFirstProduct:(state)=>{
      state.product = {}
      }
      
    },
      extraReducers: (builder)=>{ 
          builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.product = action.payload
          })
          builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
          })
        }
  })
  
  

  export const {removeFirstProduct} = productSlice.actions;
  export default productSlice.reducer;