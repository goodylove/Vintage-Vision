import React from 'react';
import { storeData } from '../../data/dummudata';
import ProductCard from '../ProductCard';
import { Typography } from '@material-tailwind/react';

const ProductSection = () => {
  return (
    <main>
      {/* <Typography
        variant="h3"
        className="text-[30px] pl-5 border-b-[4px] border-gray-300 w-fit"
      >
        New Arrivals
      </Typography> */}
      <h1 className="uppercase my-[20px]   ml-5 p-1 text-center border-b-[5px] border-gray-500 shadow-lg w-fit  text-[25px] md:text-[30px] font-Poppins ">
        New arrival
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
