import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi"
import TopButton from "../Components/TopButton"

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

  const filterPosts = (keyword) => {
    if (keyword.trim() === '') {
      setPosts(orgPosts);
      return;
    }
    const result = orgPosts.filter(item => {
      const lowerCaseKeyword = keyword.toLowerCase();
      return (
        item.name.toLowerCase().includes(lowerCaseKeyword) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerCaseKeyword)) ||
        item.mealType.some(mealType => mealType.toLowerCase().includes(lowerCaseKeyword))
      );
    });
    setPosts(result);
  };

  return (
    <div>
      <Header />
      <Search selectedTag={(tag) => filterPosts(tag)} onSearch={(keyword) => filterPosts(keyword)} />
      {posts.length > 0 ? <IntroPost post={posts[0]} /> : null}
      {posts.length > 0 ? <Blogs posts={posts.slice(1)} /> : null}
      <Footer />
      <TopButton />
    </div>
  );
}

export default Home;
