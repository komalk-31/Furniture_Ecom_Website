import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register(){

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [cpass,setCpass] = useState("")
const [error,setError] = useState("")

const navigate = useNavigate()

const registerUser = (e) => {

e.preventDefault()

if(password !== cpass){
setError("Passwords do not match")
return
}

fetch("http://127.0.0.1:8000/api/register/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username:username,
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.error){
setError(data.error)
}
else{
alert("Registration Successful")
navigate("/login")
}

})

}

return(

<div className="container mt-5">

<div className="card mx-auto shadow" style={{maxWidth:"400px"}}>

<div className="card-body">

<h4 className="card-title text-center mb-4">
Registration
</h4>

{error && (

<div className="alert alert-danger">
{error}
</div>

)}

<form onSubmit={registerUser}>

<div className="mb-3">

<label className="form-label">
Username
</label>

<input
type="text"
className="form-control"
placeholder="Enter username"
onChange={(e)=>setUsername(e.target.value)}
required
/>

</div>


<div className="mb-3">

<label className="form-label">
Email Id
</label>

<input
type="email"
className="form-control"
placeholder="Enter a valid email address"
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>


<div className="mb-3">

<label className="form-label">
Password
</label>

<input
type="password"
className="form-control"
placeholder="Enter password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>


<div className="mb-3">

<label className="form-label">
Confirm Password
</label>

<input
type="password"
className="form-control"
placeholder="Confirm password"
onChange={(e)=>setCpass(e.target.value)}
required
/>

</div>


<button className="btn btn-primary w-100">
Register
</button>

</form>

<p className="mt-3 text-center">

Already User ?

<Link to="/login">
Login
</Link>

</p>

</div>

</div>

</div>

)

}

export default Register