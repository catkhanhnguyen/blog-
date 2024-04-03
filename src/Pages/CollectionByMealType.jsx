import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../Components/Blogs";
import Layout from "../Layout/Layout";

function CollectionByMealType() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [mealTypeName, setMealTypeName] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}/mealtypes/${id}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

    axios.get(`/mealtypes/${id}`)
      .then(response => {
        setMealTypeName(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching tag name:', error);
      });
  }, [id]);

  return (
    <div>
      <Layout>
        <h2 className='text-[36px] font-semibold mb-4 text-center'>Mealtype: {mealTypeName}</h2>
        {posts !== null && <Blogs posts={posts} />}
      </Layout>
    </div>
  )
}

export default CollectionByMealType;
