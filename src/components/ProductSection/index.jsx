import React from 'react';
import { storeData } from '../../data/dummudata';
import ProductCard from '../ProductCard';
import { Typography } from '@material-tailwind/react';

const ProductSection = () => {
  return (
    <main>
      <h1 className=" my-[20px]   ml-5 p-1 text-center border-b-[5px] border-gray-500 shadow-lg w-fit  text-[25px] md:text-[30px] font-Poppins ">
        NEW ARRIVALS
      </h1>

      <section className="grid lg:grid-cols-4 justify-items-center gap-6 md:grid-cols-3 sm:grid-cols-2 px-4">
        {storeData.slice(0, 8).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </section>
    </main>
  );
};

export default ProductSection;
