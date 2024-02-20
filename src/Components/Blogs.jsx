import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
        {posts.map((item) => (
          <div key={item.id} className='m-4 cursor-pointer' onClick={() => handlePostClick(item.id)}>
            <img src={item.image} className='w-full rounded-2xl object-cover h-[250px]' alt="Cover Image" />
            <h3 className='font-bold mt-3'>{item.name}</h3>
            <div className='flex'>
              <h3 className='line-clamp-3 text-gray-500 mt-3'>{item.cookTimeMinutes} minutes cooking • Servings: {item.servings}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.mealType.map((type, index) => (
                <span key={index} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{type}</span>
              ))}
              {item.tags.map((tag, index) => (
                <span key={index} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Blogs.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      prepTimeMinutes: PropTypes.number.isRequired,
      cookTimeMinutes: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      difficulty: PropTypes.string.isRequired,
      cuisine: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      userId: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // Thêm PropTypes cho ingredients
    })
  ).isRequired,
};

export default Blogs;
