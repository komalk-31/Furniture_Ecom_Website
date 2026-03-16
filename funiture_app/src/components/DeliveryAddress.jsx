import { useState } from "react"

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500&display=swap');

  .addr-page {
    min-height: 100vh;
    background: #f5ede2;
    font-family: 'Jost', sans-serif;
    padding: 3rem 1rem;
  }

  .addr-page-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 700;
    color: #4a2008;
    text-align: center;
    margin-bottom: 2rem;
  }

  .addr-page-title::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: #8b4513;
    margin: 0.5rem auto 0;
  }

  .addr-card {
    background: #fdfaf6;
    border-radius: 18px;
    padding: 2.4rem 2.2rem;
    max-width: 560px;
    margin: 0 auto;
    border: 0.5px solid #e0d0be;
    box-shadow: 0 8px 32px rgba(42,24,8,0.1);
  }

  .addr-card-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #6b3f1f;
    margin-bottom: 1.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid #ede0ce;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .addr-error {
    background: #fdf0ec;
    border: 1px solid #e8b4a0;
    border-radius: 8px;
    padding: 0.65rem 1rem;
    font-size: 0.83rem;
    color: #8b3010;
    margin-bottom: 1.4rem;
  }

  .addr-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.4rem;
  }

  .addr-field {
    margin-bottom: 1.4rem;
  }

  .addr-field label {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    color: #7a5c3e;
    margin-bottom: 7px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .addr-field input,
  .addr-field textarea {
    width: 100%;
    border: none;
    border-bottom: 1.5px solid #c9a882;
    background: transparent;
    padding: 0.45rem 0;
    font-family: 'Jost', sans-serif;
    font-size: 0.95rem;
    color: #3d1f0a;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.25s;
    resize: none;
  }

  .addr-field input:focus,
  .addr-field textarea:focus {
    border-bottom-color: #8b4513;
  }

  .addr-field input::placeholder,
  .addr-field textarea::placeholder {
    color: #d4b99a;
    font-weight: 300;
  }

  .addr-field textarea {
    height: 80px;
    line-height: 1.5;
  }

  .addr-btn {
    width: 100%;
    background: #8b4513;
    color: #fdf6ee;
    border: none;
    border-radius: 8px;
    padding: 0.85rem;
    font-family: 'Jost', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 0.8rem;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 16px rgba(139,69,19,0.3);
  }

  .addr-btn:hover {
    background: #6b3410;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139,69,19,0.4);
  }

  .addr-btn:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 560px) {
    .addr-row { grid-template-columns: 1fr; }
    .addr-card { padding: 1.8rem 1.4rem; }
  }
`

function DeliveryAddress() {
  const [form, setForm] = useState({
    full_name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mobile: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!/^\d{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10-digit mobile number.")
      return
    }

    setLoading(true)
    const token = localStorage.getItem("token")

    fetch("http://127.0.0.1:8000/api/address/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed")
        return res.json()
      })
      .then(() => {
        window.location.href = "/placeorder"
      })
      .catch(() => setError("Something went wrong. Please try again."))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <style>{styles}</style>
      <div className="addr-page">
        <h2 className="addr-page-title">Delivery Address</h2>

        <div className="addr-card">
          <h3 className="addr-card-heading">
            📦 Enter your delivery address
          </h3>

          {error && <div className="addr-error">⚠ {error}</div>}

          <form onSubmit={handleSubmit}>

            <div className="addr-field">
              <label>Full Name</label>
              <input
                type="text"
                name="full_name"
                placeholder="John Doe"
                value={form.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="addr-field">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Street, Apartment, Area..."
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="addr-row">
              <div className="addr-field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Pune"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="addr-field">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Maharashtra"
                  value={form.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="addr-row">
              <div className="addr-field">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="411001"
                  value={form.zipcode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="addr-field">
                <label>Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="9876543210"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className="addr-btn" type="submit" disabled={loading}>
              {loading ? "Placing Order…" : "🚚 Place Order"}
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default DeliveryAddress