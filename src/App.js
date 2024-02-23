import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound.jsx'
import Profile from './Pages/Profile.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
