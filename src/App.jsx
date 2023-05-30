import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Footer from './components/footer/index';
import Nav from './components/NavBar';
import ProductCard from './components/ProductCard/index';
import './App.css';
import ListOfProduct from './components/Listofproduct/index';

function App() {
  return (
    <div>
      <Nav />
      <ListOfProduct />
      <ProductCard />
    </div>
  );
}

export default App;
