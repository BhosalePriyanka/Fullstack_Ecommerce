import React, {useState } from 'react';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import {increaseItem, decreaseItem, removeItem,emptyCart} from '../Redux/Slice/cartSlice'
import { MdDelete} from "react-icons/md";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


function Cart(){
const cartitem = useSelector(state => state.cart.cart)

let totalAmount = 0;
const dispatch = useDispatch();
const[state,setState] = useState({
   image:'',
   title:'',
   price:'',
   quantity:'',
   amount:''
})

const handelInput = (e)=>{
    setState({...state,[e.target.name]: e.target.value});
}
const user = useSelector(state=>state.login.login)
console.log(user)



const handleSubmit = async()=>{
const response = await fetch('http://localhost:4000/api/product',{
            method : 'POST',
            body : JSON.stringify(state),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`  
            }
        })
        
    }

return( 
<div className ="mt-5 p-5">
{
cartitem && cartitem.length === 0 ? ( <h1>Your Cart Is Empty </h1> ) : 
cartitem && cartitem.map((item) => {	
const {title, image, price,quantity} = item;
totalAmount  += item.quantity * price;



return(
<>
<div>
<Table striped bordered hover responsive className='shadow'>
<thead>
<tr>
<th>Image</th>
<th> Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Amount</th>
</tr>
</thead>
<tbody key = {item.id}>
<tr>
<td className = "col-2" name='image' input='file' value={state.image = image} readOnly  onChange={handelInput}><img style={{height:"200px" , width:"200px"}} src ={image} alt = {title} /></td>
<td className = "col-2" name='title' input='text' value={state.title = title} readOnly  onChange={handelInput}> {title} </td>
<td className = "col-2" name='price' input='number' value={state.price = price} readOnly  onChange={handelInput}> ${price} </td>
<td className = "col-2" name='quantity' input='number' value={state.quantity = quantity} readOnly  onChange={handelInput}>
<div onClick = {()=> dispatch(increaseItem(item))}><AiFillPlusCircle/> </div>
<div> {quantity}</div>
<div onClick={()=> dispatch(decreaseItem(item))}><AiFillMinusCircle/> </div>	
</td>
<td className = "col-2" name='amount' input='number' value={state.amount = quantity*price} readOnly  onChange={handelInput}> <div>${quantity*price} </div></td>
<td className = "col-2">
<div onClick = {()=> dispatch(removeItem(item))}> <MdDelete/> </div>
</td>
</tr>
</tbody>
</Table>	
</div>
</>
);
})}




{totalAmount > 0 ? <div className="chekOut"> 

<Link to={`/ProductListing`}> <Button>Continue Shopping</Button> </Link>
<br/>
<Button className = "m-2" >Total Amount to Pay : ${totalAmount.toFixed(2)}</Button>
<br/>
{ Object.keys(user).length > 1 ? 

<Link to = {`/Profile`} state = {cartitem}>
<Button className="m-2" onClick={() => {dispatch(emptyCart(cartitem)); handleSubmit()}}  > Proceed To Checkout</Button>
<br/>
</Link>
:
<Link to = {`/Login`}>
<Button className="btn btn-success m-2"  > Proceed To Checkout</Button>
</Link>
}
</div>
: ""
}

</div>
)
}
export default Cart;


