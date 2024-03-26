import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CollectionContent({ tags, mealtypes }) {
  const navigate = useNavigate();

  const handleTagClick = (tagId) => {
    navigate(`/collection/tags/${tagId}`);
  };

  const handleMealtypeClick = (mealtypeId) => {
    navigate(`/collection/mealtypes/${mealtypeId}`);
  };

  return (
    <div className='mx-[50px] montaga-regular mb-16'>
      <h2 className='text-[30px] mt-5'>All Tags</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span
            key={tag.id}
            style={{ width: '25%', boxSizing: 'border-box', padding: '8px', cursor: 'pointer', textDecoration: 'none' }}
            onClick={() => handleTagClick(tag.id)}
          >
            • {tag.name}
          </span>
        ))}
      </div>

      <h2 className='text-[30px] mt-5'>All Mealtypes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mealtypes.map(mealtype => (
          <span
            key={mealtype.id}
            style={{ width: '25%', boxSizing: 'border-box', padding: '8px', cursor: 'pointer', textDecoration: 'none' }}
            onClick={() => handleMealtypeClick(mealtype.id)}
          >
            • {mealtype.name}
          </span>
        ))}
      </div>
    </div>
  )
}

CollectionContent.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  mealtypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default CollectionContent;
