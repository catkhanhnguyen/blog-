import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/Images/logo.jpg';
import { IoBrushSharp } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const imgHoverAnimation = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    opacity: isHovered ? 0.8 : 1,
  });

  return (
    <animated.div style={headerAnimation} className='flex justify-between items-center'>
        <animated.img 
          src={logo} 
          onClick={() => navigate('/')} 
          className='w-[180px] cursor-pointer'
          style={imgHoverAnimation}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        />
        <ul className='flex gap-4 md:gap-14'>
            <li onClick={() => navigate('/')} className='hover:font-bold cursor-pointer'>Home</li>
            <li onClick={() => navigate('/about')} className='hover:font-bold cursor-pointer'>About Us</li>
            <li onClick={() => navigate('/contact')} className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button onClick={() => navigate('/addrecipe')} className='bg-red-500 rounded-full text-white flex items-center mr-10'>
            Add recipe <IoBrushSharp className='ml-1 text-[20px]'/>
        </button>
    </animated.div>
  );
}

export default Header;
