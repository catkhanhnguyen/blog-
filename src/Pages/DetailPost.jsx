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
    const token = localStorage.getItem('token'); // Lấy token từ localStorage

    axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Thêm token vào tiêu đề yêu cầu
      }
    })
    .then(response => {
      setPost(response.data);
    })
    .catch(error => {
      console.error('Error fetching post:', error);
    });

  }, [id]);

  const handleDeleteClick = () => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage

    axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Thêm token vào tiêu đề yêu cầu
      }
    })
    .then(() => {
      console.log('Post id', `${id}`, 'deleted successfully');
      navigate(-1);
    })
    .catch(error => {
      console.error('Error deleting post:', error);
    });
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
