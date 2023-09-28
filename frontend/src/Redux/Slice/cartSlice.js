import { createSlice } from "@reduxjs/toolkit";

const initialState = {
cart :[]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
                addProductInCart:(state,action)=>{
                  const exist = state.cart.filter((product)=> { return product.id === action.payload.id})
                  if(exist < 1){
                    alert('Product added in to cart')
                     state.cart.push({...action.payload,quantity:1})
                  }else{
                     alert('Allready added in to cart')   
                  }   
                },
                increaseItem:(state,action)=>{
                    state.cart.map((item) => {
                        if(item.id === action.payload.id)
                        {
                        item.quantity = item.quantity + 1
                        } 
                        return item
                        
                         })                              
                },
                decreaseItem:(state,action)=>{
                    state.cart.map((item)=>{
                        if(item.id === action.payload.id){
                            if(item.quantity >= 2){
                            item.quantity = item.quantity - 1
                            }
                        }
                        return item
                    })
                },
                removeItem:(state,action)=>{
                    state.cart.pop(action.payload)
                },
                emptyCart:(state)=>{
                    state.cart = []
                    alert('Payment Done')
                }
        }
    })
   export default cartSlice.reducer;
   export const {addProductInCart,increaseItem,decreaseItem, removeItem,emptyCart} = cartSlice.actions;
   