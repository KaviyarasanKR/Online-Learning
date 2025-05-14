import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('❗ Please enter both email and password');
      return;
    }

    if (isLogin) {
      // Admin login
      if (email === 'admin@example.com' && password === 'password123') {
        setError('');
        setIsAuthenticated(true);
        navigate('/admin');
      }
      // User login
      else if (email === 'user@example.com' && password === 'user123') {
        setError('');
        setIsAuthenticated(true);
        navigate('/navcourses');
      }
      // Invalid
      else {
        setError('❌ Invalid login credentials');
      }
    } else {
      // Registration logic (just simulate)
      setError('');
      setIsAuthenticated(true);
      navigate('/navcourses');
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.heading}>{isLogin ? '🔐 Login' : '📝 Register'}</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="📧 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          disabled={isAuthenticated}
        />

        <input
          type="password"
          placeholder="🔑 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          disabled={isAuthenticated}
        />

        {!isAuthenticated && (
          <>
            <button type="submit" style={styles.button}>
              {isLogin ? 'Login' : 'Register'}
            </button>
            <p style={styles.toggleText}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span onClick={() => setIsLogin(!isLogin)} style={styles.toggleLink}>
                {isLogin ? 'Register here' : 'Login here'}
              </span>
            </p>
          </>
        )}

        {isAuthenticated && (
          <p style={styles.welcome}>🎉 Redirecting, {email}...</p>
        )}
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: 'rgba(30, 30, 30, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: 40,
    borderRadius: 18,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    color: '#f1f1f1',
    animation: 'fadeIn 0.6s ease-in-out',
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 10,
  },
  input: {
    padding: 14,
    fontSize: 16,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#f9f9f9',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: 14,
    fontSize: 16,
    background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    color: '#fff',
    fontWeight: 600,
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  error: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
  },
  toggleText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    color: '#ccc',
  },
  toggleLink: {
    color: '#f9d342',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: 5,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 18,
    color: '#90ee90',
    fontWeight: 'bold',
  },
};

export default AuthPage;
