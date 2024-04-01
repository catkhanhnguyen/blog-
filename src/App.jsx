import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AddRecipe from './Pages/AddRecipe';
import EditRecipe from './Pages/EditRecipe';
import Collection from './Pages/Collection';
import CollectionByTag from './Pages/CollectionByTag';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để theo dõi trạng thái đăng nhập

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách kiểm tra token trong localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(token ? true : false);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        {/* Điều hướng người dùng tới trang đăng nhập nếu chưa đăng nhập */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login />} />
        <Route path="/posts/:id" element={isLoggedIn ? <DetailPost /> : <Login />} />
        <Route path="/addrecipe" element={isLoggedIn ? <AddRecipe /> : <Login />} />
        <Route path="/edit/:id" element={isLoggedIn ? <EditRecipe /> : <Login />} />
        <Route path="/collection" element={isLoggedIn ? <Collection /> : <Login />} />
        <Route path="/collection/tags/:id" element={isLoggedIn ? <CollectionByTag /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
