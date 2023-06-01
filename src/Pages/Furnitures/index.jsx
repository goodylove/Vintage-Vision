import { useState } from 'react';
import { productType } from '../../app/features/filterProduct/filterproductSlice';
import ListOfProduct from '../../components/Listofproducttofilter';
import ProductCard from './../../components/ProductCard/index';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './../../components/footer/index';

const Furnitures = () => {
  const subfurnitures = ['table', 'nightstand', 'sofa'];
  const allFurnitures = useSelector((state) => state.product.products);

  const [values, setValues] = useState('furniture');
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    let value = e.target.value;
    dispatch(productType(value));

    setValues(value);
  };
  return (
    <div>
      <main className="my-10 flex justify-center items-center gap-4 w-full ">
        <section>
          <div className="flex justify-between items-center mt-10 w-full  mb-5">
            <span className=" my-[20px]   ml-5 p-1 text-center border-b-[5px] border-gray-500 shadow-lg w-fit  text-[10px] md:text-[30px] font-Poppins ">
              {values.charAt(0).toUpperCase() + values.slice(1)}
            </span>
            <ListOfProduct
              data={subfurnitures}
              values={values}
              handlerChange={handlerChange}
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 px-4">
            {allFurnitures.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Furnitures;
