import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form , Button} from 'react-bootstrap';
import {addUser} from '../Redux/Slice/loginSlice'
import {useDispatch} from 'react-redux';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function Login(){
const [state, setState] = useState(
{
	email: '',
	password:'',	
}
);

const [error, setError] = useState();
const dispatch = useDispatch()

const handleChange = (event) => {
		setState({...state,[event.target.name]:event.target.value});
	}

const handleLogin = async() => {
const response = await fetch('https://fullstack-ecommerce-backend.onrender.com/api/user/login',{
	method:'POST',
	headers:{
		'Content-Type':'application/json'
	},
	body:JSON.stringify(state)
})
const jsonData = await response.json();
console.log(jsonData)

if(jsonData.error){
	setError(jsonData.error)
}

if(!jsonData.error){
	setError('')
	localStorage.setItem('user', JSON.stringify(jsonData));
	dispatch(addUser(jsonData))
}
}

const handelGoogleLogin = async(credentialResponse)=>{
	var decoded = jwt_decode(credentialResponse.credential);
	const response = await fetch('https://fullstack-ecommerce-backend.onrender.com/api/user/googleLogin',{
	method:'POST',
	headers:{
		'Content-Type':'application/json'
	},
	body:JSON.stringify(decoded)
	})
	const jsonData = await response.json()
	dispatch(addUser(jsonData))
}
	return(
		<>
		<div className ="mt-5 p-5">
		<h3>Login Form</h3>
		<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5" >
		<Form.Group>
		<Form.Label> Email-Id </Form.Label>
		<Form.Control type='text'name="email" value = {state.email} onChange={handleChange} autoComplete = "off" />
		</Form.Group>
		<Form.Group>
		<Form.Label>Password</Form.Label>
		<Form.Control type='password' name="password" value = {state.password} onChange={handleChange} autoComplete = "off" />
		</Form.Group>
		<br/>
		{error && <p className='text-danger'>{error}</p>}
		<Button onClick = {handleLogin} variant="primary"> Submit </Button> 
		<Link to= '/Reset'><p>Forgot Password</p></Link>
		<br/>
		<br/>
		<p>New User Register Now.
		<Link  to = {`/Registerpage`}>
		Sign Up
		</Link>
		</p>
		<p>OR</p>
		<Button>
		<GoogleOAuthProvider clientId = {process.env.REACT_APP_CLIENTID} >
		<GoogleLogin 
			onSuccess={handelGoogleLogin}
			onError={() => {
				console.log('Login Failed');
				setError({error:'Login Failed'})
			}}
			shape = {'circle'}
			text = {'signin_with'}
			logo_alignment = {'center'}
			/>
		</GoogleOAuthProvider>
		</Button>
		</Form>
		</div>
		</>
		)
}
export default Login;