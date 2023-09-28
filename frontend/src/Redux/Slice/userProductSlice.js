import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    userProduct : [],
    isLoading : false,
    error : null
}

export const fetchUserProduct = createAsyncThunk('content/fetchProductContent',
 async(user)=>{
try{
    const response = await fetch('http://localhost:4000/api/product',{
    headers:
    {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`
    }
 })
    const jsonData =  await response.json()
    return jsonData
}catch(error){
    console.log(error)
}
})
const userProductSlice = createSlice({
    name : 'userProduct',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserProduct.pending,(state)=>{
            state.isLoading = true 
        })
        builder.addCase(fetchUserProduct.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(fetchUserProduct.fulfilled,(state,action)=>{
            state.isLoading = false
            state.userProduct = action.payload
        })

    }
})

export default userProductSlice.reducer;