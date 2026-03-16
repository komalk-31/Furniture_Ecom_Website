import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Products from "./components/Products"
import Shop from "./components/Shop"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from "./components/Register"


function App(){

return(

<Router>

<Navbar/>


<Routes>

<Route path="/" element={<Products/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/> 
<Route path="/register" element={<Register/>}/>

</Routes>

</Router>

)

}

export default App