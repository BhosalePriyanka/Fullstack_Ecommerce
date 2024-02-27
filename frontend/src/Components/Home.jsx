import React from 'react';
import img from '../Image/img1.webp';
import img2 from '../Image/img2.jpeg';
import img3 from '../Image/img3.jpeg';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'


function Home(){
  const user = useSelector(state=>state.login.login)
  console.log(user)


return(
<>

<div className = "mt-5 p-5">
<h1>  Welcome To E-Shopping Cart </h1>
<Carousel className="home">
  <Carousel.Item interval={1000}>
    <img className="d-block w-100  pe-none" src={img} alt="First slide"/>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img className="d-block w-100  pe-none" src = {img2} alt="Second slide"/>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img className="d-block w-100  pe-none" src = {img3} alt="Third slide"/>
  </Carousel.Item>
</Carousel>

</div>
</>
);
}
export default Home;
