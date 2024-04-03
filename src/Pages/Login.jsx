import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import Layout from '../Layout/Layout';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl = "/login";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post(baseUrl, {
      username: username,
      password: password
    })
      .then(response => {
        if (response.status === 200) {
          const token = response.data.accessToken;
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          navigate('/');
        } else {
          alert('Login not success. Please try again');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Login not success. Please try again');
      });
  };

  return (
    <div>
      <Layout>
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          onSubmit={handleLogin}
        />
      </Layout>
    </div>
  );
}

export default Login;
