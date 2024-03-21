import PropTypes from 'prop-types';

function TagFilter({ posts }) {
  const tags = ['Asian', 'Chicken', 'Indian', 'Salad', 'Italian', 'Dessert', 'Korean']

  const uniquePosts = tags.map(tag => {
    return posts.find(post => post.tags.includes(tag));
  });

  return (
    <div className="grid grid-cols-7 mt-16">
      {uniquePosts.map((post, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer">
          {post && (
            <img
              src={post.image}
              alt={tags[index]}
              className="rounded-full w-24 h-24 object-cover"
            />
          )}
          <span className="mt-2 text-sm font-bold">{tags[index]}</span>
        </div>
      ))}
    </div>
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
};

export default TagFilter;
