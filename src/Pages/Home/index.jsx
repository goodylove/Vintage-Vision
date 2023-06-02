import ProductSection from '../../components/ProductSection';
import Slider from '../../components/Slider/index';
import ShippingCard from './Shiping';
import PaymentMethod from './../../components/PaymentMethod/index';
import Footer from './../../components/footer/index';

const Home = () => {
  return (
    <div className="mt-[4rem] w-full home">
      <Slider />
      <section className="w-full">
        <ShippingCard />
      </section>

      <ProductSection />

      <PaymentMethod />
      <Footer />
    </div>
  );
};

export default Home;
