import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreateNote from './components/Notes/CreateNote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CreateNote" element={<CreateNote />} />
    </Routes>
  );
}

export default App;
