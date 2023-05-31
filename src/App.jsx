import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './components/footer/index';
import Nav from './components/NavBar';
import ProductCard from './components/ProductCard/index';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
