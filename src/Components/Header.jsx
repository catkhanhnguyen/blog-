import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/Images/logo.jpg';
import { IoLogoYoutube } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();

  // Sử dụng useState để lưu trạng thái hover của hình ảnh
  const [isHovered, setIsHovered] = useState(false);

  // Sử dụng useSpring để tạo hiệu ứng animation cho header
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' }, // Giá trị ban đầu
    to: { opacity: 1, transform: 'translateY(0)' }, // Giá trị cuối cùng
    config: { duration: 500 }, // Cấu hình animation
  });

  // Sử dụng useSpring để tạo hiệu ứng animation khi hover vào hình ảnh
  const imgHoverAnimation = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Scale lớn hơn khi hover
    opacity: isHovered ? 0.8 : 1, // Giảm độ mờ khi hover
  });

  return (
    <animated.div style={headerAnimation} className='flex justify-between items-center'>
        <animated.img 
          src={logo} 
          onClick={() => navigate('/')} 
          className='w-[180px] cursor-pointer'
          style={imgHoverAnimation}
          onMouseEnter={() => setIsHovered(true)} // Xử lý sự kiện hover vào hình ảnh
          onMouseLeave={() => setIsHovered(false)} // Xử lý sự kiện rời khỏi hình ảnh
        />
        <ul className='flex gap-4 md:gap-14'>
            <li onClick={() => navigate('/')} className='hover:font-bold cursor-pointer'>Home</li>
            <li onClick={() => navigate('/about')} className='hover:font-bold cursor-pointer'>About Us</li>
            <li onClick={() => navigate('/contact')} className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white flex items-center'>
            Subcribe <IoLogoYoutube className='ml-3 text-[20px]'/>
        </button>
    </animated.div>
  );
}

export default Header;
