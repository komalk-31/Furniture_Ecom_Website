import { Link } from "react-router-dom"
import "../assets/navbar.css"

function Navbar(){

const username = localStorage.getItem("username")

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">🪑 Nirmal</Link>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navmenu">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/shop">Shop</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/about">About</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>

{username ? (

<>
<li className="nav-item">
<Link className="nav-link" to="/cart">Cart</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/logout">Logout</Link>
</li>

<li className="nav-item">
<span className="nav-link active">
Welcome {username} !
</span>
</li>
</>

):(

<>

<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/register">Register</Link>
</li>

</>

)}

</ul>

</div>

</div>

</nav>

)

}

export default Navbar