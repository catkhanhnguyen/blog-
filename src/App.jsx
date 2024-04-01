import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để theo dõi trạng thái đăng nhập

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách kiểm tra token trong localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(token ? true : false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/posts/:id" element={isLoggedIn ? <DetailPost /> : <Navigate to="/login" />} />
        <Route path="/addrecipe" element={isLoggedIn ? <AddRecipe /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={isLoggedIn ? <EditRecipe /> : <Navigate to="/login" />} />
        <Route path="/collection" element={isLoggedIn ? <Collection /> : <Navigate to="/login" />} />
        <Route path="/collection/tags/:id" element={isLoggedIn ? <CollectionByTag /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
