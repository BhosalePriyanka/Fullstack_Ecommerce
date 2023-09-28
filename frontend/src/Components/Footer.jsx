import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook , AiFillInstagram , AiFillYoutube} from "react-icons/ai";

function Footer(){
	return ( 
  <>
 
 <Container fluid className = "bg-dark p-4 m-3">
      <Row>
        <Col className = "text-white" xs={12} md={3}> <h5> ADDRESS </h5> 
        <hr/>
        <span>813 Howard Street <br/>Oswego London 13126 UK</span>
        </Col>

        <Col className = "text-white" xs={4} md={3}><h5> ABOUT</h5>
       <hr/>
        <ul className = "list-unstyled">
        <li>Contact us</li>
         <li>Careers</li>
         <li>Corporate Information</li>
         </ul>
        </Col>
        <Col className = "text-white" md={3} xs={4}> <h5>POLICY</h5>
        <hr/>
        <ul className = "list-unstyled">
        <li>Return Policy</li>
         <li>Terms of use</li>
         <li>Cancelation</li>
         <li>FAQ</li>
         </ul>
        </Col>
        <Col className = "text-white" md={3} xs={4}> <h5> SOCIAL </h5>
      <hr/>
        <div className = "btn btn-primary p-1 m-2"><AiFillFacebook/></div>
        <div className = "btn btn-success p-1 m-2">< AiFillInstagram/></div>
        <div className = "btn btn-danger p-1 m-2"><AiFillYoutube/></div>
     
        </Col>
      </Row>  
</Container>

	</>
)
}
export default Footer;