import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContentPost from '../Components/ContentPost';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import IntroPost from '../Components/IntroPost';

function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <IntroPost post={post} />
      <ContentPost post={post} />
      <Footer />
    </div>
  );
}

export default DetailPost;
