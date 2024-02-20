import { useNavigate } from 'react-router-dom'
import logo from './../assets/Images/logo.jpg'
import { IoLogoYoutube } from "react-icons/io5"

function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} onClick={() => navigate('/')} className='w-[180px] cursor-pointer' />
        <ul className='flex gap-4 md:gap-14'>
            <li onClick={() => navigate('/')} className='hover:font-bold cursor-pointer'>Home</li>
            <li onClick={() => navigate('/about')} className='hover:font-bold cursor-pointer'>About Us</li>
            <li onClick={() => navigate('/contact')} className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white flex items-center'>
            Subcribe <IoLogoYoutube className='ml-3 text-[20px]'/>
        </button>
    </div>
  )
}

export default Header