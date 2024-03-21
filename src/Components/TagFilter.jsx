import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TagFilter({ posts, onTagClick }) {
  const tags = ['Asian', 'Chicken', 'Indian', 'Salad', 'Italian', 'Dessert', 'Korean'];

  const handleTagClick = (tag) => {
    onTagClick(tag);
  };

  const uniquePosts = tags.map(tag => {
    return posts.find(post => post.tags.includes(tag));
  });

  const [hoveredTag, setHoveredTag] = useState(null);

  const tagsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const tagSprings = uniquePosts.map((post, index) => {
    const isHovered = hoveredTag === tags[index];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      opacity: isHovered ? 0.8 : 1,
    });
  });

  return (
    <animated.div style={tagsAnimation} className="grid grid-cols-7 mt-16">
      {uniquePosts.map((post, index) => (
        <animated.div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleTagClick(tags[index])}
          onMouseEnter={() => setHoveredTag(tags[index])}
          onMouseLeave={() => setHoveredTag(null)}
          style={tagSprings[index]}
        >
          {post && (
            <img
              src={post.image}
              alt={tags[index]}
              className="rounded-full w-24 h-24 object-cover"
            />
          )}
          <span className="mt-2 text-sm font-bold">{tags[index]}</span>
        </animated.div>
      ))}
    </animated.div>
  );
}

TagFilter.propTypes = {
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
    })
  ).isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default TagFilter;
