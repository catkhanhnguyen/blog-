import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function RelatedPost({ posts }) {
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="w-[300px] flex flex-col gap-4 bg-gray">
      <span className='text-[20px] mt-8 pt-4 font-bold pr-8'>Related recipes</span>
      {posts.slice(0, 3).map(post => (
        <div key={post.id} className="flex items-center gap-4 cursor-pointer" onClick={() => handlePostClick(post.id)}>
          <img src={post.image} alt={post.name} className="w-28 h-28 object-cover" />
          <div>
            <h3 className="text-lg font-semibold">{post.name}</h3>
            <p className="text-sm">Rating: {post.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

RelatedPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default RelatedPost;
