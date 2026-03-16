import React from "react";
// import ProductCard from "../components/ProductCard";
import "../assets/home.css";

function Home() {

  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      price: 25000,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: 8000,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      id: 3,
      name: "Dining Table",
      price: 18000,
      image: "https://assets.architecturaldigest.in/photos/660190c12fab87310db04993/master/w_1600%2Cc_limit/5-Dining%25202.jpg"
    }
  ];

  return (
    <div>

      {/* Hero Section */}

      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/images/main.jfif')"
        }}
      >
        <div className="hero-content">
          <h1>Modern Furniture For Modern Living</h1>
          <p>Elegant designs. Premium quality. Affordable prices.</p>
          <button className="btn btn-warning">Shop Now</button>
        </div>
      </section>

      {/* Category Section */}

      <section className="category-section">

        <h2>Best For Your Categories</h2>

        <div className="category-container">

          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc" />
            <p>Living Room</p>
          </div>

          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" />
            <p>Office</p>
          </div>

          <div className="category-item">
            <img src="https://assets.architecturaldigest.in/photos/660190c12fab87310db04993/master/w_1600%2Cc_limit/5-Dining%25202.jpg" />
            <p>Dining</p>
          </div>

        </div>

      </section>

      {/* Featured Products */}

      <section className="container mt-5">

        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">

          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;