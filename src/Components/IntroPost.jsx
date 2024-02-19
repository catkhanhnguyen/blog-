import PropTypes from 'prop-types'


function IntroPost({ post }) {

  return (
    <div>
      <img src={post.coverImage} />
      <div>
        <h4>{post.tag}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.desc}</h4>
        <div className='flex items-center mt-5'>
          <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
            className='w-[50px] rounded-full' />
          <div className='ml-2'>
            <h3 className='font-bold '>Tubeguruji</h3>
            <h3 className='text-gray-500'>24 Sept 2024</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

IntroPost.propTypes = {
  post: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired,
}

export default IntroPost