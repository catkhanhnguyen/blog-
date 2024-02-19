import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"

import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi"


function Home() {
  const [post,setPost]=useState([])
  // const [orgPost,setOrgPost]=useState([])

  useEffect(() => {
    getPost()
  }, [])
  const getPost = () => {
    GlobalApi.getPost.then(res => {
      setPost(res.data.recipes)
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