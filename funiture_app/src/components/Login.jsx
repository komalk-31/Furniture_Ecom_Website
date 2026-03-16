import { useState } from "react"
import "../assets/login.css";

  
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const loginUser = (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("token", data.access)
          localStorage.setItem("username", username)
          window.location.href = "/"
        } else {
          setError("Invalid username or password. Please try again.")
        }
      })
      .catch(() => setError("Server error. Please try again later."))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <style>{styles}</style>
      <div className="login-page">
        <div className="login-card">

          {/* Brand icon */}
          <div className="login-brand">
            <div className="login-brand-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10h18v2H3v-2zm2 4h14v2H5v-2zm-2-8h18v2H3V6zm4 12h10v2H7v-2z"/>
              </svg>
            </div>
          </div>

          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to your account</p>

          {error && (
            <div className="login-error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b3010" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={loginUser}>
            <div className="login-field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="login-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="login-divider">
            <span>or</span>
          </div>

          <p className="login-footer">
            Don't have an account?{" "}
            <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login