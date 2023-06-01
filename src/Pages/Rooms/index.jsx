import { useSelector, useDispatch } from 'react-redux';
import ListOfProduct from './../../components/Listofproducttofilter/index';
import ProductCard from '../../components/ProductCard';
import Footer from './../../components/footer/index';
import { productType } from '../../app/features/filterProduct/filterproductSlice';
import { useState } from 'react';

const Rooms = () => {
  const subRomms = ['bedroom', 'diningroom', 'livingroom'];
  const allRooms = useSelector((state) => state.product.products);

  const [values, setValues] = useState('rooms');
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    let value = e.target.value;
    dispatch(productType(value));

    setValues(value);
  };

  return (
    <>
      <main className="my-10 flex justify-center items-center gap-4 w-full ">
        <section>
          <div className="flex justify-between items-center mt-10 w-full  mb-5">
            <span className=" my-[20px]   ml-5 p-1 text-center border-b-[5px] border-gray-500 shadow-lg w-fit  text-[10px] md:text-[30px] font-Poppins ">
              {values.charAt(0).toUpperCase() + values.slice(1)}
            </span>
            <ListOfProduct
              data={subRomms}
              values={values}
              handlerChange={handlerChange}
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 px-4">
            {allRooms.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Rooms;
