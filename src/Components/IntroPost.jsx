import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function IntroPost({ posts }) {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className='mx-[70] md:mx-[40px] grid grid-cols-3 gap-8 mt-4'>
      {posts.slice(0, 3).map((post) => (
        <Post key={post.id} post={post} onClick={() => handlePostClick(post.id)} />
      ))}
    </div>
  );
}

function Post({ post, onClick }) {
  const [springProps, set] = useSpring(() => ({
    scale: 1,
    filter: 'brightness(100%)',
    config: { tension: 300, friction: 10 }
  }));

  const limitedName = post.name.length > 20 ? post.name.slice(0, 20) + '...' : post.name;

  return (
    <animated.div
      className='relative cursor-pointer shadow-md montaga-regular overflow-hidden'
      onClick={onClick}
      onMouseEnter={() => set({ scale: 1.02, filter: 'brightness(110%)' })}
      onMouseLeave={() => set({ scale: 1, filter: 'brightness(100%)' })}
      style={{
        ...springProps,
        willChange: 'transform, filter',
        aspectRatio: '9/13'
      }}
    >
      
      <img src={post.image} alt="Recipe" className='object-cover w-full h-full' />
      <div className="absolute flex items-center justify-center bg-black text-white mt-[-50px] mx-[5%]">
        <span className="text-lg">{limitedName}</span>
      </div>
    </animated.div>
  );
}

IntroPost.propTypes = {
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
    })
  ).isRequired,
};

Post.propTypes = {
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
  onClick: PropTypes.func.isRequired,
};

export default IntroPost;


