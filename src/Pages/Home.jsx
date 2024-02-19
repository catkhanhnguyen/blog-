import Blogs from "../Components/Blogs"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import IntroPost from "../Components/IntroPost"
import Search from "../Components/Search"


function Home() {
  return (
    <div>
        <Header />
        <Search />
        <IntroPost />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home