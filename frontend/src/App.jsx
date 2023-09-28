
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import React from 'react';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Registerpage from './Components/Registerpage';
import Profile from './Components/Profile';
import ProductListing from './Components/ProductListing';
import {ErrorBoundary} from 'react-error-boundary';
import { Fallback } from './Components/Fallback';
import {useSelector} from 'react-redux';
import Password from './Components/Password';
import Reset from './Components/Reset';




function App() {
const user = useSelector(state=>state.login.login)
console.log(user)
return (
<>
<Router>
 <NavBar /> 
<ErrorBoundary FallbackComponent = { Fallback} >
<Home />
</ErrorBoundary>
<ErrorBoundary FallbackComponent = { Fallback}>
<Routes>
<Route exact path = '*' element={<ProductListing/>} />
<Route exact path = '/product/:id' element={<ProductDetails/>}/>
<Route exact path = '/ProductListing' element={<ProductListing/>} />
<Route exact path = '/Cart' element={<Cart/>} /> 
<Route exact path = '/Registerpage' element={ Object.keys(user).length === 0 ? <Registerpage/> : <Navigate to = '/Profile'/>  } /> 
<Route exact path = '/Login' element={Object.keys(user).length === 0 ? <Login/> : <Navigate to = '/Profile'/>} />  
<Route exact path = '/Profile' element={Object.keys(user).length > 0 ? <Profile/> : <Navigate to = '/Login'/>} />
<Route exact path = '/Password/:token' element={<Password/>}/>
<Route exact path = '/Reset' element = {< Reset/>}/>
</Routes>
</ErrorBoundary>
</Router>
<ErrorBoundary FallbackComponent = { Fallback}>
<Footer />
</ErrorBoundary>

</>

);
}

export default App;
