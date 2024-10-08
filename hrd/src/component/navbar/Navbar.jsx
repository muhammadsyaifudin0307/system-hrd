import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from 'react-router-dom';
import { PiUserCircleLight } from 'react-icons/pi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavbarD({ setIsLoggedIn }) {  // Terima setIsLoggedIn sebagai prop
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Hook untuk mendapatkan lokasi saat ini
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    // Hapus status login dari localStorage
    localStorage.removeItem('isLoggedIn');
    
    // Set state login menjadi false
    setIsLoggedIn(false);
    
    // Navigasi ke halaman login
    navigate('/login'); // Langsung navigasi setelah status diupdate
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/dashboard' className='nav-brand'>
          <span className='nav-brand-second'>Star</span>Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto nav-list'>
            <Nav.Link as={Link} to='/dasboard' className={getNavLinkClass('/dasboard')}>Home</Nav.Link>
            <Nav.Link as={Link} to='/employee' className={getNavLinkClass('/employee')}>Employee</Nav.Link>
            <Nav.Link as={Link} to='/absensi' className={getNavLinkClass('/absensi')}>Absensi</Nav.Link>
            <Nav.Link as={Link} to='/gajian' className={getNavLinkClass('/gajian')}>Pengajian</Nav.Link>
            <Nav.Link as={Link} to='/recruitment' className={getNavLinkClass('/recruitment')}>Dokumen</Nav.Link>
          </Nav>
          <Nav>
            <div className='d-flex align-items-center'>
              {darkMode ? (
                <FaSun className='fs-2 me-2' onClick={toggleDarkMode} style={{ cursor: 'pointer' }} />
              ) : (
                <FaMoon className='fs-2 me-2' onClick={toggleDarkMode} style={{ cursor: 'pointer' }} />
              )}
              <Dropdown align='end' className='icon-nav'>
                <Dropdown.Toggle as={Nav.Link} id='dropdown-custom-components'>
                  <PiUserCircleLight className='fs-1' />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarD;
