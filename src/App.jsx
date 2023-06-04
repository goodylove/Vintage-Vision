import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './components/footer/index';
import Nav from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './components/Login/index';
import { useSelector } from 'react-redux';
import Rooms from './Pages/Rooms/index';
import Furnitures from './Pages/Furnitures/index';
import Kitchens from './Pages/Kitchen/index';
import Decor from './Pages/Decors/index';
import SingleProduct from './components/SingleProduct/index';
import Cart from './Pages/Cart/index';
import WhishList from './Pages/wishlist';
import Checkout from './Pages/Checkout/index';
import './App.css';
import PaymentDetails from './Pages/Paymentdetails';

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
            <Route path="/furnitures" element={<Furnitures />} />
            <Route path="/kitchen" element={<Kitchens />} />
            <Route path="/decor" element={<Decor />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/whishlist" element={<WhishList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentdetails" element={<PaymentDetails />} />
          </Routes>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
