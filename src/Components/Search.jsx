import { IoSearchOutline } from 'react-icons/io5'
import banner from './../assets/Images/banner.jpg'
import { useState } from 'react'

function Search() {
  const [activeIndex,setActiveIndex]=useState(0)
  const tags = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'React'
    },
    {
      id: 3,
      name: 'React Native'
    },
    {
      id: 4,
      name: 'Angular'
    },
    {
      id: 5,
      name: 'UI/UX'
    },
  ]
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
      <img src={banner} className='rounded-2xl' />
      <div className='flex items-center bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%]'>
        <IoSearchOutline className='text-[20px] text-gray-400' />
        <input type='text' placeholder='Search' className='outlined-none ml-[20px]' />
      </div>
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`${index==activeIndex?'bg-red-500 text-white':null}
            px-2 py-1 rounded-2xl
            md:rounded-full cursor-pointer md:px-4 hover:scale-110 
            border-red-500 transition-all duration-100 ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Search