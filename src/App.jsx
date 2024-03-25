import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AddRecipe from './Pages/AddRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<DetailPost />} />
        <Route path="/collection" element={<Contact />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
