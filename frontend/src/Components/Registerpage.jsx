import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';



function Registerpage(){
const[error, setError] = useState();
const navigate = useNavigate();
const [state, setState] = useState(
{
	username: '',
	email:'',
	password:''
}
);

const handleChange = (event) => {
	setState({...state,[event.target.name]:event.target.value
		});
	}
const handleSubmit = async()=>{
	const response = await fetch('http://localhost:4000/api/user/signup',{
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify(state)
	})

	const json = await response.json()
	console.log(json)
	setError(json.error)
	if(!json.error){
		setError('')
		alert('Data Added Sucessfully')
		navigate('/Login');
	}
}


return(
<>
<div className ="mt-5 p-5">
<h3>Signup Form</h3>
<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5">
<Form.Group>
    <Form.Label>Username </Form.Label><br/>
    <Form.Control type='text' name="username" value = {state.username} onChange={handleChange} />
</Form.Group>
    <br/>
<Form.Group>
    <Form.Label>Email</Form.Label><br/>
    <Form.Control type='email' name="email" value = {state.email} onChange={handleChange} />
</Form.Group>
<br/>
<Form.Group>
	<Form.Label>Password </Form.Label><br/>
	<Form.Control type='password' name="password" value = {state.password} onChange={handleChange}/>
</Form.Group>
<br/>
{error && <p className='text-danger'>{error}</p>}
	<Button variant="primary" onClick={handleSubmit}> Submit </Button>
</Form>

</div>
</>
	);
}

export default Registerpage;