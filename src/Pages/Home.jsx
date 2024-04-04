import Blogs from "../Components/Blogs"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import axios from "axios"
import TagFilter from "../Components/TagFilter"
import AddButton from "../Components/AddButton"
import AddUserButton from "../Components/AddUserButton"
import { jwtDecode } from "jwt-decode"
import Layout from "../Layout/Layout"

function Home() {
  const baseUrl = '/recipes'

  const [posts, setPosts] = useState([]);
  const [orgPosts, setOrgPosts] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(baseUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setPosts(res.data.content);
        setOrgPosts(res.data.content);
        const decodedToken = jwtDecode(token);
        const auth = decodedToken.auth[0].authority;
        setUserRole(auth);
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
      <Layout>
      <Search onSearch={filterPosts} filterByMealType={filterByMealType} />
      {posts.length > 0 ? <IntroPost posts={posts} /> : null}
      <TagFilter posts={orgPosts} onTagClick={filterByTag} />
      {posts.length > 3 ? <Blogs posts={posts.slice(3)} /> : null}
      </Layout>
      {userRole === 'SYS_ADMIN' && <AddButton />}
      {userRole === 'SYS_ADMIN' && <AddUserButton />}
    </div>
  );
}

export default Home;