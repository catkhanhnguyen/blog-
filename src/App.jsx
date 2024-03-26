import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AddRecipe from './Pages/AddRecipe';
import EditRecipe from './Pages/EditRecipe';
import Collection from './Pages/Collection';
import CollectionByTag from './Pages/CollectionByTag';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<DetailPost />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/tags/:id" element={<CollectionByTag />} />
      </Routes>
    </Router>
  );
}

export default App;
