import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function TagFilter({ posts, onTagClick }) {
  const tagMappings = [
    { tagName: 'Asian', tagId: 5 },
    { tagName: 'Chicken', tagId: 10 },
    { tagName: 'Indian', tagId: 20 },
    { tagName: 'Salad', tagId: 12 },
    { tagName: 'Italian', tagId: 2 },
    { tagName: 'Dessert', tagId: 7 },
    { tagName: 'Korean', tagId: 35 }
  ];

  const handleTagClick = (tagId) => {
    onTagClick(tagId);
  };

  // Sử dụng tagMappings để lấy tagId tương ứng với tagName
  const uniquePosts = tagMappings.map(tag => {
    return posts.find(post => post.tags.some(t => t.name === tag.tagName));
  });
  const [hoveredTag, setHoveredTag] = useState(null);

  const tagsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const tagSprings = uniquePosts.map((post, index) => {
    const isHovered = hoveredTag === tagMappings[index].tagName;
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
          onClick={() => handleTagClick(tagMappings[index].tagId)}
          onMouseEnter={() => setHoveredTag(tagMappings[index].tagName)}
          onMouseLeave={() => setHoveredTag(null)}
          style={tagSprings[index]}
        >
          {post && (
            <img
              src={post.image}
              alt={tagMappings[index].tagName}
              className="rounded-full w-24 h-24 object-cover"
            />
          )}
          <span className="mt-2 text-sm font-bold">{tagMappings[index].tagName}</span>
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
      ingredients: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default TagFilter;


