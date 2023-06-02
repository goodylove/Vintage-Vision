import Button from './../Button/index';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from './../footer/index';

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.product.singleProducts);
  const { img, price, name, discount, type } = singleProduct;
  return (
    <>
      <main className="w-full flex justify-center items-center mt-10">
        <section className="flex flex-col mt-8">
          <Link to="/">
            <div className="w-full md:hidden pl-5 sm:flex ">
              <div className="w-8 h-8 bg-black text-white flex items-center rounded-full justify-center">
                <AiOutlineArrowLeft />
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-10  mt-10 flex-col lg:flex-row md:flex-row sm:flex-col p-5">
            <div>
              <img src={img} alt="" className=" shadow-md rounded" />
            </div>
            <div>
              <div>
                <h4>Name: &nbsp;{name}</h4>
                <h4>Price: &nbsp;{price}</h4>
                <h4>
                  Discount: &nbsp;
                  <span className=" line-through text-gray-500">
                    {discount}
                  </span>
                </h4>
                <h4>Type: &nbsp;{type}</h4>

                <p className="max-w-[300px] font-Poppins font-[300]">
                  <span className="text-[20px] font-[400]">Discriptions:</span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi dolorum modi unde, assumenda minima exercitationem
                  labore vitae veritatis eveniet consectetur quod inventore nam
                  voluptas facilis et, accusamus, quibusdam dolor minus.
                </p>
                <div className="flex  items-center my-2 gap-5">
                  <Button
                    className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px]"
                    text="Add To Cart"
                  />
                  <Button
                    className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md  shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px]"
                    text="Add To Wishlist"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
