import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/Images/logo.jpg';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='flex justify-between items-center'>
      <img src={logo} onClick={() => navigate('/')} className='w-[180px] cursor-pointer' alt='Logo' />
      <ul className='flex gap-4 md:gap-14'>
        <li onClick={() => navigate('/')} className='hover:font-bold cursor-pointer'>
          Home
        </li>
        <li onClick={() => navigate('/about')} className='hover:font-bold cursor-pointer'>
          About Us
        </li>
        <li onClick={() => navigate('/contact')} className='hover:font-bold cursor-pointer'>
          Contact Us
        </li>
      </ul>
      {isLoggedIn ? (
        <button onClick={handleLogout} className='bg-red-500 rounded-full text-white flex items-center mr-10'>
          Log out
        </button>
      ) : (
        <button onClick={handleLogin} className='bg-red-500 rounded-full text-white flex items-center mr-10'>
          Log in
        </button>
      )}
    </div>
  );
}

export default Header;
