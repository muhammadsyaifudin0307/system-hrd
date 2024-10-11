import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardEmployee from './page/dashboard/Dasboard';
import Employee from './page/employee/Employee';
import AbsensiEmployee from './page/absensi/AbsensiEmployee';
import Salary from './page/Salary/Salary';
import DocumentEmployee from './page/documentt/DocumentEmployee';
import NavbarD from './component/navbar/Navbar';
import Login from './page/login/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'; // Ambil status dari localStorage
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn); // Simpan status login ke localStorage
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/login'
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          {isLoggedIn && (
            <>
              <Route path='/' element={<Navigate to='/dasboard' />} />
              <Route path='/dasboard' element={<><NavbarD setIsLoggedIn={setIsLoggedIn} /><DashboardEmployee /></>} />
              <Route path='/employee' element={<><NavbarD setIsLoggedIn={setIsLoggedIn} /><Employee /></>} />
              <Route path='/absensi' element={<><NavbarD setIsLoggedIn={setIsLoggedIn} /><AbsensiEmployee /></>} />
              <Route path='/salary' element={<><NavbarD setIsLoggedIn={setIsLoggedIn} /><Salary /></>} />
              <Route path='/documentemployee' element={<><NavbarD setIsLoggedIn={setIsLoggedIn} /> <DocumentEmployee /></>} />
            </>
          )}
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
