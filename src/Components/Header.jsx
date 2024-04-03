import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/Images/logo.jpg';
import { IoLogOut } from 'react-icons/io5';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername)
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
        <li onClick={() => navigate('/collection')} className='hover:font-bold cursor-pointer'>
          Collection
        </li>
      </ul>
      <div className="flex items-center">
        {isLoggedIn && (
          <>
            <span className="text-black mr-4">Welcome, {username}</span>
            <button onClick={handleLogout} className='bg-red-500 rounded-full text-white text-[20px] flex mr-10 p-2 items-center'>
              <IoLogOut />
            </button>
          </>
        )}
        {!isLoggedIn && (
          <button onClick={handleLogin} className='bg-red-500 rounded-full text-white flex items-center mr-10'>
            Log in
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
