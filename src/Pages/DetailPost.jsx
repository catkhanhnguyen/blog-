import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContentPost from '../Components/ContentPost';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopButton from '../Components/TopButton';
import Preview from '../Components/Preview';
import RelatedPost from '../Components/RelatedPost';

function DetailPost() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Fetch detail of current post
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

    // Fetch related posts
    axios.get(baseUrl)
      .then(response => {
        const allPosts = response.data.recipes;
        // Filter related posts by comparing tags
        const related = allPosts.filter(p => p.id !== id && p.tags.some(tag => post.tags.includes(tag)));
        setRelatedPosts(related);
      })
      .catch(error => {
        console.error('Error fetching related posts:', error);
      });
  }, [id, post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='montaga-regular'>
      <Header />
      <div className="flex">
        <div>
          <Preview post={post} />
          <ContentPost post={post} />
        </div>
        <div>
          <RelatedPost posts={relatedPosts} />
        </div>
      </div>
      <Footer />
      <TopButton />
    </div>
  );
}

export default DetailPost;
