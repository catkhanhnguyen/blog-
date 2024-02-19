import PropTypes from 'prop-types'


function IntroPost({ post }) {

  return (
    <div className='grid grid-cols-2 gap-8 mt-4 cursor-pointer'>
      <img src={post.image} className='rounded-2xl object-cover h-full'/>
      <div>
        <h4 className='text-red-500 mt-2'>Tags: {post.mealType.join(", ")}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.name}</h2>
        <p className='text-gray-500'>Preparation Time: {post.prepTimeMinutes} minutes</p>
        <p className='text-gray-500'>Cooking Time: {post.cookTimeMinutes} minutes</p>
        <p className='text-gray-500'>Servings: {post.servings}</p>
        <p className='text-gray-500'>Difficulty: {post.difficulty}</p>
        <p className='text-gray-500'>Cuisine: {post.cuisine}</p>
      </div>
    </div>
  )
}

IntroPost.propTypes = {
  post: PropTypes.shape({
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
  }).isRequired,
}

export default IntroPost