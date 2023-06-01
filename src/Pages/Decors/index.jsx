import { useState } from 'react';
import { productType } from '../../app/features/filterProduct/filterproductSlice';
import ListOfProduct from '../../components/Listofproducttofilter';
import ProductCard from './../../components/ProductCard/index';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './../../components/footer/index';

const Decor = () => {
  const decor = useSelector((state) => state.product.products);

  return (
    <div>
      <main className="my-10 flex justify-center items-center gap-4 w-full ">
        <section className="mt-20">
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 px-4">
            {decor.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Decor;
