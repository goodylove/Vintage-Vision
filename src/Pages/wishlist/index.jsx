import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { addToWishList } from '../../app/features/wishlist/wishlistSlice';
import WishListCard from './../../components/whishListCrad/index';
const WhishList = () => {
  const wishItem = useSelector((state) => state.wishList.wishLists.wish);
  return (
    <>
      <main className="my-20 flex items-center justify-center w-full">
        <section className="w-full flex flex-col justify-center items-center">
          <Link to="/" className="w-[67%]">
            <div className="w-full md:hidden  sm:flex  text-start">
              <div className="w-8 h-8 bg-black text-white flex items-center rounded-full justify-center">
                <AiOutlineArrowLeft />
              </div>
            </div>
          </Link>
          {wishItem.length < 1 ? (
            <div className="h-96 items-center flex ">
              <h3>Your Wish List Is Empty </h3>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2  justify-items-center  lg:gap-8 md:gap-6 gap-4">
              {wishItem.map((item, index) => (
                <WishListCard item={item} key={index} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhishList;
