import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/main" element={<MainPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
