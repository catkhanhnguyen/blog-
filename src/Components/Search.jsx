import { IoSearchOutline } from 'react-icons/io5'
import banner from './../assets/Images/banner.jpg'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function Search({ onSearch, filterByMealType }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line no-unused-vars
  
  const searchAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const tags = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Dinner' },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Dessert' },
  ];

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  const handleMealTypeClick = (mealTypeId) => {
    setActiveIndex(mealTypeId);
    filterByMealType(mealTypeId);
  };

  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[40px]'>
      <animated.img 
        src={banner} 
        className='rounded-2xl'
        style={searchAnimation}
      />
      <animated.div 
        className='flex items-center bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%]'
        style={searchAnimation}
      >
        <IoSearchOutline className='text-[20px] text-gray-400' />
        <input
          value={keyword}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          type='text'
          placeholder='Search'
          className='outlined-none ml-[20px]'
        />
      </animated.div>
      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => { handleMealTypeClick(item.id) }}
            className={`${index === activeIndex ? 'bg-red-500 text-white' : null}
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

Search.propTypes = {
  filterByMealType: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Search;

