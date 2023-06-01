import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { storeData } from '../../data/dummudata';
import ListOfProduct from './../../components/Listofproducttofilter/index';
import ProductCard from '../../components/ProductCard';
import Footer from './../../components/footer/index';

const Rooms = () => {
  const allRooms = useSelector((state) => state.product.products);
  // console.log(allRooms);
  const dispatch = useDispatch();

  return (
    <>
      <main className="my-10 flex justify-center items-center gap-4 w-full ">
        <section>
          <div className="flex justify-between items-center mt-10 w-full  mb-5">
            <span className=" my-[20px]   ml-5 p-1 text-center border-b-[5px] border-gray-500 shadow-lg w-fit  text-[10px] md:text-[30px] font-Poppins ">
              NEW ARRIVALS
            </span>
            <ListOfProduct />
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
