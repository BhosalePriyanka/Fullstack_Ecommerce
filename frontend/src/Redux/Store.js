import { configureStore} from "@reduxjs/toolkit";
import productsReducer from '../Redux/Slice/productsSlice';
import productReducer from '../Redux/Slice/productSlice';
import cartReducer from '../Redux/Slice/cartSlice';
import loginReducer from '../Redux/Slice/loginSlice'
import userProductReducer from '../Redux/Slice/userProductSlice'
import {persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage, 
    version: 1,
  }
const reducer = combineReducers({
    products : productsReducer,    
    product  : productReducer,
    cart     : cartReducer,
    login    : loginReducer,
    userProduct : userProductReducer
})
const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,]
        }
    })
})

export default store;



