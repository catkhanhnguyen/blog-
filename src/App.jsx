import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<DetailPost />} />
      </Routes>
    </Router>
  );
}

export default App;
