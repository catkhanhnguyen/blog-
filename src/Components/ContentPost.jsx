import PropTypes from 'prop-types';

function ContentPost({ post }) {
  return (
    <div className='font-serif mx-[70] md:mx-[70px] mt-4 mb-24 montaga-regular'>
      <h2 className='text-[40px] mt-5 text-center'>Ingredients</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {post.ingredients.split('\n').map((ingr, index) => (
          <div key={index} className="text-center">
            • {ingr}
          </div>
        ))}
      </div>

      <div className='bg-black text-white rounded-2xl'>
        <h2 className='text-[40px] mt-8 text-center pt-4'>Instructions</h2>
        <div className='pb-8 mt-4'>
          {post.instructions.split('\n').map((inst, index) => (
            <div key={index} className="px-8 py-2">
              <span className='bg-white px-2 py-1 text-black rounded-[50%] items-center mr-4'>{index+1}</span> {inst}
            </div>
          ))}
        </div>
      </div>

      <h2 className='text-[40px] mt-24 text-center'>Enjoy your meal!</h2>
    </div>
  );
}

ContentPost.propTypes = {
  post: PropTypes.shape({
    ingredients: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContentPost;
