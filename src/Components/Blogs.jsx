import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 lg:px-6'>
        {posts.map((item) => (
          <div key={item.id} className='m-4 cursor-pointer' onClick={() => handlePostClick(item.id)}>
            <img src={item.image} className='w-full rounded-2xl object-cover h-[250px]' alt="Cover Image" />
            <h3 className='font-bold mt-3'>{item.name}</h3>
            <div className='flex'>
              <h3 className='line-clamp-3 text-gray-500 mt-3'>{item.cookTimeMinutes} minutes cooking • Servings: {item.servings}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.mealTypes.map((type) => (
                <span key={type.id} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{type.name}</span>
              ))}
              {item.tags.map((tag) => (
                <span key={tag.id} className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">{tag.name}</span>
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
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Blogs;
