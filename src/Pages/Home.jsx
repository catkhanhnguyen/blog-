import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi"


function Home() {
  const [post,setPost]=useState([])
  const [orgPost,setOrgPost]=useState([])

  useEffect(() => {
    getPost()
  }, [])
  const getPost = () => {
    GlobalApi.getPost.then(res => {
      const result = res.data.data.map(item => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        tag: item.attributes.tag,
        coverImage: item.attributes.coverImage.data.attributes.url,
      }));
      setPost(result);
      setOrgPost(result);
    })
  }
  return (
    <div>
      <Header />
      <Search />
      {post.length>0? <IntroPost post={post[0]} />:null}
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home