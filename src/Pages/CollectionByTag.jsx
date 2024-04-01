import { useParams } from "react-router-dom";
import Header from "../Components/Header"
import { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../Components/Blogs";

function CollectionByTag() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/tags/${id}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

  }, [id]);

  return (
    <div className='montaga-regular'>
        <Header />
        <h2 className='text-[30px] mt-5'></h2>
        {posts !== null && <Blogs posts={posts} />}
    </div>
  )
}

export default CollectionByTag
