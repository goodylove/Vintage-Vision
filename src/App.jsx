import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './components/footer/index';
import Nav from './components/NavBar';
import ProductCard from './components/ProductCard/index';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './components/Login/index';
import { useSelector } from 'react-redux';
import Rooms from './Pages/Rooms/index';
import './App.css';

function App() {
  const authUser = useSelector((state) => state.login.user.authUser);

  return (
    <div>
      {authUser ? '' : <Login />}
      {authUser ? (
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
