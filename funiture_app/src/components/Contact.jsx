import { useState } from "react"

function Contact(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [subject,setSubject] = useState("")
const [message,setMessage] = useState("")

const submitForm = (e)=>{

e.preventDefault()

fetch("http://127.0.0.1:8000/api/contact/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
subject:subject,
message:message
})

})
.then(res=>res.json())
.then(data=>{
alert("Message sent successfully")
})

}

return(

<div>

{/* Hero Section */}

<div className="contact-hero">

<div className="hero-image">

<img
src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200"
alt="Contact Hero"
/>

</div>

<div className="hero-text">

<h2>LET'S CONNECT</h2>

<p>
Having a great relationship with your designer is one of the key
contributors to your project's success. We'd love to hear from you
and start the conversation.
</p>

<p className="hero-email">
📧 info@nirmalfurniture.com
</p>

</div>

</div>


{/* Contact Form */}

<div className="contact-container">

<h1>Contact Us</h1>

<div className="contact-box">

<div className="contact-form">

<h2>Send Us a Message</h2>

<form onSubmit={submitForm}>

<label>Name</label>

<input
type="text"
required
onChange={(e)=>setName(e.target.value)}
/>

<label>Email</label>

<input
type="email"
required
onChange={(e)=>setEmail(e.target.value)}
/>

<label>Subject</label>

<input
type="text"
onChange={(e)=>setSubject(e.target.value)}
/>

<label>Message</label>

<textarea
rows="5"
onChange={(e)=>setMessage(e.target.value)}
></textarea>

<button type="submit">
Send Message
</button>

</form>

</div>


{/* Contact Info */}

<div className="contact-info">

<h2>Contact Information</h2>

<p>
<b>Address:</b><br/>
Nirmal Furniture,<br/>
Jamner, Maharashtra
</p>

<p>
<b>Phone:</b><br/>
+91 9552924597
</p>

<p>
<b>Email:</b><br/>
info@nirmalfurniture.com
</p>

<p>
<b>Working Hours:</b><br/>
Mon - Sat : 9 AM - 7 PM
</p>

</div>

</div>


{/* Map */}

<iframe
title="map"
src="https://maps.google.com/maps?q=jamner&t=&z=13&ie=UTF8&iwloc=&output=embed"
></iframe>

</div>


{/* Bottom Image */}

<div className="contact-bottom-img">

<img
src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400"
alt="Furniture"
/>

</div>

</div>

)

}

export default Contact