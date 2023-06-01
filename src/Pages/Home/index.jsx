import ProductSection from '../../components/ProductSection';
import Slider from '../../components/Slider/index';
import ShippingCard from './Shiping';

const Home = () => {
  return (
    <div className="mt-[4rem] w-full">
      <Slider />
      <section className="w-full">
        <ShippingCard />
      </section>
      <section>
        <ProductSection />
      </section>
    </div>
  );
};

export default Home;
