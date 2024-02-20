import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi"

function Home() {
  const [posts, setPosts] = useState([]);
  const [orgPosts, setOrgPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    GlobalApi.getPost.then(res => {
      setPosts(res.data.recipes);
      setOrgPosts(res.data.recipes);
    });
  };

  const filterPosts = (tag) => {
    if (tag === 'All') {
      setPosts(orgPosts);
      return;
    }
    const result = orgPosts.filter(item => item.mealType.includes(tag));
    setPosts(result);
  };

  return (
    <div>
      <Header />
      <Search selectedTag={(tag) => filterPosts(tag)} />
      {posts.length > 0 ? <IntroPost post={posts[0]} /> : null}
      {posts.length > 0 ? <Blogs posts={posts.slice(1)} /> : null}
      <Footer />
    </div>
  );
}

export default Home;
