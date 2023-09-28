import { useParams,useNavigate } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import {useEffect} from 'react';
import './Main.css';
import {fetchProduct} from '../Redux/Slice/productSlice';
import {removeFirstProduct} from '../Redux/Slice/productSlice';
import {addProductInCart} from '../Redux/Slice/cartSlice';

export const ProductDetails = () => {
const dispatch = useDispatch();
const navigate = useNavigate()
const {id}  = useParams();


useEffect(()=>{
	dispatch(fetchProduct(id));
	return()=>(
		dispatch(removeFirstProduct())
	)
},[dispatch,id])


const product= useSelector(state => state.product.product);
const { title, image, price,  description,} = product;

return(
<>
<div className = "container">
{Object.keys(product).length === 0 ? ( <h1 className = "mt-5">Loading....  <div className="spinner-border"></div></h1> ) : 
(
	<div className ="container">
	<div className = "w-50 border shadow mx-auto overflow-auto">
		<img className = "img-fluid"  style={{height:"300px"}} src ={image} alt = {title}/>
		<div className = "mt-5 fw-bold">{title}</div>
		<div className = "pe-none mt-2"> <button> Price:${price} </button> </div>
		<div> ${description}</div>
		<button className="btn btn-primary mx-2 my-5" onClick={()=>dispatch(addProductInCart(product))} > Add To Cart </button>
		
	</div>
	<button className="btn btn-primary mx-2 my-5" onClick={()=> navigate(-1)}>Back</button>
</div>
)}
</div>
</>
)
}

export default ProductDetails;