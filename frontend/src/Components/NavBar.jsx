import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector,useDispatch} from 'react-redux';
import {Navbar , Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import {useNavigate, Link} from 'react-router-dom';
import {logoutuser} from '../Redux/Slice/loginSlice'

export const NavBar = () => {
const item = useSelector(state => state.cart.cart);
const dispatch = useDispatch()

// const userDetails = JSON.parse(localStorage.getItem("user"));
const user = useSelector(state=>state.login.login)
console.log(user)
const navigate = useNavigate();
function handelLogout(){
  //  localStorage.clear();
  dispatch(logoutuser())
  navigate("/Login");   
}


return(
<> 
<Navbar bg="dark" variant="dark" expand="lg" fixed="top" className = "text-uppercase h4 p-3">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" variant="primary" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link  className = "mx-2 " as = {Link} to = {`./ProductListing`}>Home</Nav.Link> 
        <Nav.Link className = "mx-2 " as = {Link} to = {`./Cart`}> <AiOutlineShoppingCart/>{item.length} </Nav.Link>
    { Object.keys(user).length > 1  ? 
        <NavDropdown title={ user && user.username} id="basic-nav-dropdown">
         <NavDropdown.Item as = {Link} to = {`./Profile`}>
          Profile
          </NavDropdown.Item>
        <NavDropdown.Item onClick = {handelLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
          : 
         <Nav.Link className = "mx-2 " as = {Link} to = {`./Login`}> Login </Nav.Link>    
    }
         </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

</>
)
}

export default NavBar;