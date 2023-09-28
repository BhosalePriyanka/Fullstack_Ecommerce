import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login : {}
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.login = action.payload     
        },
        logoutuser:(state)=>{
            state.login = {}
        }
    }

})
export default loginSlice.reducer;
export const {addUser,logoutuser} = loginSlice.actions;