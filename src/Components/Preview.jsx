import PropTypes from 'prop-types';
import { IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Preview({ post, handleDeleteClick }) {
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/edit/${post.id}`);
  };

  return (
    <div 
      className='mx-[70] md:mx-[70px] grid grid-cols-2 gap-16 mt-4 cursor-pointer bg-black p-8 rounded-xl shadow-md montaga-regular relative'
    >
      <div className='flex absolute top-0 right-0'>
        <button
          className="my-4 px-4 py-2 bg-gray-800 text-white rounded-md text-sm"
          onClick={handleDeleteClick}
        >
          <IoTrash />
        </button>

        <button
          className="m-4 px-4 py-2 bg-gray-800 text-white rounded-md text-sm"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
      

      <img src={post.image} alt="Recipe" className='rounded-lg object-cover h-full' />
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-2">
          {post.mealTypes.map((mealtype) => (
            <span key={mealtype.id} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{mealtype.name}</span>
          ))}
          {post.tags.map((tag) => (
            <span key={tag.id} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{tag.name}</span>
          ))}
        </div>
        <h2 className='text-[40px]  text-white mt-5'>{post.name}</h2>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <p className='text-gray-500'>Preparation Time:</p>
          <p className='text-white'>{post.prepTimeMinutes} minutes</p>
          <p className='text-gray-500'>Cooking Time:</p>
          <p className='text-white'>{post.cookTimeMinutes} minutes</p>
          <p className='text-gray-500'>Servings:</p>
          <p className='text-white'>{post.servings}</p>
          <p className='text-gray-500'>Difficulty:</p>
          <p className='text-white'>{post.difficulty}</p>
          <p className='text-gray-500'>Cuisine:</p>
          <p className='text-white'>{post.cuisine}</p>
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  handleDeleteClick: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    prepTimeMinutes: PropTypes.number.isRequired,
    cookTimeMinutes: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    userId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    mealTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
  }).isRequired,
};

export default Preview;
