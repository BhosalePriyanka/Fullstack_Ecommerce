import{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
import {useNavigate,useParams} from 'react-router-dom'

function Password() {
const [state, setState] = useState(
        {
            email: '',
            newpassword:'',	
        }
        );
const[error,setError] = useState('')
const{token} = useParams()
console.log(token)
const navigate = useNavigate()
const handlePassword = async() => {
     const response = await fetch(`http://localhost:4000/api/user/passwordLink/${token}`,{
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
      alert('Password Saved Sucessfully')
      navigate('/Login')
      }
      
    }

const handleChange = (event) => {
            setState({...state,[event.target.name]:event.target.value});
    }

  return (
<>
<div className ="mt-5 p-5">
		<h3>Set New Password</h3>
		<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5" >
		<Form.Group>
		<Form.Label> Email-Id </Form.Label>
		<Form.Control type='text'name="email" value = {state.email} onChange={handleChange} autoComplete = "off" />
		</Form.Group>
		<Form.Group>
		<Form.Label>New Password</Form.Label>
		<Form.Control type='password' name="newpassword" value = {state.newpassword} onChange={handleChange} autoComplete = "off" />
		</Form.Group>
    {error && <p className='text-danger'>{error}</p>}
        <Button  variant="primary" onClick={handlePassword}> Submit </Button> 
		</Form>
</div>
</>
  )
}

export default Password