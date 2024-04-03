import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AddRecipe from './Pages/AddRecipe';
import EditRecipe from './Pages/EditRecipe';
import Collection from './Pages/Collection';
import CollectionByTag from './Pages/CollectionByTag';
import Login from './Pages/Login';
import AddUser from './Pages/AddUser';
import CollectionByMealType from './Pages/CollectionByMealType';


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
        <Route path="/collection/mealtypes/:id" element={<CollectionByMealType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
