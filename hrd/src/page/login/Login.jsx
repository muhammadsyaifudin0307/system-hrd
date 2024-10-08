import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsLoggedIn }) => { // Menerima prop setIsLoggedIn
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') { // Ganti dengan logika autentikasi yang sesuai
      setIsLoggedIn(true); // Set status login menjadi true
      toast.success('Login successful!'); // Menampilkan toast sukses
      navigate('/dasboard'); // Navigasi ke halaman dashboard
    } else {
      toast.error('Please enter valid username and password'); // Menampilkan toast kesalahan
    }
  };
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col md={12}>
          <div className="login-box p-5 shadow">
            <h2 className="title-login text-center mb-5">SIGN IN</h2>
            <Form onSubmit={handleSubmit}>
              {/* Input Username */}
              <Form.Group controlId="formBasicUsername" className="input-with-icon">
                <AiOutlineUser className="icon-outside" />
                <div className="input-container">
                  <Form.Label
                    className={`floating-label ${isUsernameFocused || username ? 'focused' : ''}`}
                  > Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setIsUsernameFocused(true)}
                    onBlur={() => setIsUsernameFocused(false)}
                    className="border-bottom-only"
                  />
                </div>
              </Form.Group>

              {/* Input Password */}
              <Form.Group controlId="formBasicPassword" className="input-with-icon">
                <FiLock className="icon-outside" />
                <div className="input-container">
                  <Form.Label
                    className={`floating-label ${isPasswordFocused || password ? 'focused' : ''}`}
                  >
                    Password
                  </Form.Label> 
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    className="border-bottom-only"
                  />
                </div>
              </Form.Group>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss draggable pauseOnHover />

              <Button variant="dark" type="submit" className="w-50 mt-4 login-btn">
                LOGIN
              </Button>
            </Form>
            <p className="forgot-password text-center mt-3">
              <a href="#">Forgot Your Password?</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Login;