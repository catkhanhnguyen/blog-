import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import TopButton from "../Components/TopButton"
import axios from "axios"
import TagFilter from "../Components/TagFilter"

function Home() {
  const baseUrl = '/recipes'

  const [posts, setPosts] = useState([]);
  const [orgPosts, setOrgPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(baseUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setPosts(res.data.content);
        setOrgPosts(res.data.content);
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
        item.name.toLowerCase().includes(lowerCaseKeyword)
      );
    });
    setPosts(result);
  };

  const filterByTag = (tagId) => {
    if (tagId === "") {
      setPosts(orgPosts);
      return;
    }
    const token = localStorage.getItem('token');
    axios.get(`${baseUrl}/tags/${tagId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error('Error fetching posts by tag from database:', error);
      });
  };

  const filterByMealType = (mealTypeId) => {
    if (mealTypeId === "" || mealTypeId === 0) {
      setPosts(orgPosts);
      return;
    }
    const token = localStorage.getItem('token');
    axios.get(`${baseUrl}/mealtypes/${mealTypeId}`, { headers: { Authorization: `Bearer ${token}` } }) // Gửi token trong tiêu đề "Authorization"
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error('Error fetching posts by meal type from database:', error);
      });
  };



  return (
    <div className="montaga-regular">
      <Header />
      <Search onSearch={(keyword) => filterPosts(keyword)} filterByMealType={filterByMealType} />
      {posts.length > 0 ? <IntroPost posts={posts} /> : null}
      <TagFilter posts={orgPosts} onTagClick={(tagId) => filterByTag(tagId)} />
      {posts.length > 3 ? <Blogs posts={posts.slice(3)} /> : null}
      <Footer />
      <TopButton />
    </div>
  );
}

export default Home;