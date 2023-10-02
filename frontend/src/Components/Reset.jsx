import React from 'react'
import{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
function Reset() {
	const [state, setState] = useState(
        {
            email: ''	
        }
        );
const[error,setError] = useState('')

const handleSend = async() => {
     const response = await fetch('https://fullstack-ecommerce-backend.onrender.com/api/user/reset',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(state)
        })

      const jsonData = await response.json();
      console.log(jsonData)
      if(jsonData.error){
      setError(jsonData.error)
      }
      if(!jsonData.error){
      setError('')
      }
      if(jsonData.message){
        setError('')
        alert('Varification link sent on email.')
        setState({email:''})
      }
    }

const handleChange = (event) => {
            setState({...state,[event.target.name]:event.target.value});
    }

  return (
    <>
    <div className ="mt-5 p-5">
		<h3>Password Reset Link</h3>
		<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5" >
		<Form.Group>
		<Form.Label> Email-Id </Form.Label>
		<Form.Control type='text'name="email" value = {state.email} onChange={handleChange} autoComplete = "off" />
		</Form.Group>
		
    	{error && <p className='text-danger'>{error}</p>}
        <Button  variant="primary" onClick={handleSend}> Send </Button> 
		</Form>
</div>
    </>
  )
}

export default Reset;