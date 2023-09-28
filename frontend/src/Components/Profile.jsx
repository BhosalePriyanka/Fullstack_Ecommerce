import React from 'react';
import {Table,Image} from 'react-bootstrap'
import {fetchUserProduct} from '../Redux/Slice/userProductSlice';
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'


function Profile(){
const user = useSelector(state=>state.login.login)
console.log(user)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchUserProduct(user))
},[dispatch,user])

const userProduct = useSelector(state => state.userProduct.userProduct)
console.log(userProduct)
const isLoading = useSelector((state) => state.userProduct.isLoading)
const error = useSelector((state) => state.userProduct.error)
console.log(isLoading)
console.log(error)

return(
<> 
<div className ="mt-5 p-5">
<h3>Order Details</h3>
{isLoading && <p>{isLoading} <p className="spinner-border"></p> </p>}
{
userProduct && userProduct.map((product)=>
<Table striped bordered hover responsive className='shadow'>
    <thead>
     <tr>
            <th>Ordered Item</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price(£)</th>
            <th>OrderDate</th>
    </tr>
    </thead>
     <tbody>
    <tr>
            <td className='col-2'><Image style = {{height:"100px", width:"100px"}} src={product.IMAGE}/></td>
            <td className='col-2'>{product.TITLE}</td>
            <td className='col-2'>{product.QUANTITY}</td>
            <td className='col-2'>{product.PRICE}</td>
            <td className='col-2'>{new Date(`${product.ORDERDATE}`).toLocaleDateString()}</td> 
 </tr>
</tbody>
</Table>
)}
</div>
</>
)}







export default Profile;