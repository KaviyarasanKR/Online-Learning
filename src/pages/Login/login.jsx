import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Mock login logic
    if (email === 'admin@example.com' && password === 'password123') {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  form: {
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    width: 300
  },
  input: {
    padding: 10,
    fontSize: 16,
    border: '1px solid #ccc',
    borderRadius: 4
  },
  button: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: 14
  }
};

export default Login;
