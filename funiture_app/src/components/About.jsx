import "../assets/about.css"

function About(){

return(

<div>

{/* Hero Section */}

<section
className="about-hero d-flex align-items-center text-white"
style={{
backgroundImage: "url('/images/topabout.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
height: "80vh"
}}
>

<div className="container">

<h1 className="fw-bold">About Our Brand</h1>

<p className="w-50">
At FurniStyle, we create elegant furniture crafted from premium teak wood,
blending modern aesthetics with timeless durability.
</p>

</div>

</section>


{/* Overview Section */}

<section className="py-5 bg-light">

<div className="container text-center">

<h2 className="fw-bold mb-4">Overview</h2>

<p className="text-muted">
We specialize in high-quality teak wood furniture designed to enhance
comfort and elevate your lifestyle. Our expert craftsmanship ensures
durability, beauty, and functionality in every piece. We also provide
customization options tailored to your space and preferences.
</p>

</div>

</section>


{/* Details Section */}

<section className="py-5">

<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<h3 className="fw-bold">
Carefully Considered Details & Perfection
</h3>

<p className="text-muted">
Each product is thoughtfully designed with precision.
From wood selection to finishing polish, we ensure
excellence in every detail.
</p>

<a href="#" className="btn btn-warning">
Learn More
</a>

</div>


<div className="col-md-6">

<img
src="/images/about1.jpg"
className="img-fluid rounded shadow"
/>

</div>

</div>

</div>

</section>


{/* Crafted Section */}

<section className="py-5 bg-light">

<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<img
src="/images/about3.jpg"
className="img-fluid rounded shadow"
/>

</div>


<div className="col-md-6">

<h3 className="fw-bold">
Crafted in Combination of Beauty & Perfection
</h3>

<p className="text-muted">
Our furniture is crafted from premium teak wood and customized
according to your requirements. Whether modern or traditional,
we design pieces that reflect your personality and lifestyle.
</p>

<a href="#" className="btn btn-warning">
Shop Now
</a>

</div>

</div>

</div>

</section>

</div>

)

}

export default About