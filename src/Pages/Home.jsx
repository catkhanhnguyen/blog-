import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import TopButton from "../Components/TopButton"
import axios from "axios"

function Home() {
  const baseUrl = '/recipes'

  const [posts, setPosts] = useState([]);
  const [orgPosts, setOrgPosts] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setPosts(res.data.recipes);
        setOrgPosts(res.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching posts from database:', error);
      });
  }, []);


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
