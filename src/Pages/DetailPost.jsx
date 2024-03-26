import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ContentPost from '../Components/ContentPost';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopButton from '../Components/TopButton';
import Preview from '../Components/Preview';

function DetailPost() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

  }, [id]);

  const handleDeleteClick = () => {
    axios.delete(`${baseUrl}/${id}`)
      .then(() => {
        console.log('Post id', `${id}`, 'deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
      navigate(-1);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='montaga-regular'>
      <Header />
      <Preview post={post} handleDeleteClick={handleDeleteClick}/>
      <ContentPost post={post} />
      <Footer />
      <TopButton />
    </div>
  );
}

export default DetailPost;
