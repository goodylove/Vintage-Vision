import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

import {
  addToWishList,
  removeWishlist,
} from '../../app/features/wishlist/wishlistSlice';
import { useDispatch } from 'react-redux';
import Button from '../Button';
const WishListCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <main className="flex w-full justify-center items-center my-10">
        <section className="flex flex-col md:flex-row sm:flex-col lg:flex-row gap-6 my-10 items-center">
          <div className="max-w-[400px] h-67">
            <img src={item.img} alt="" className="w-full h-full" />
          </div>

          <div>
            <h3>Name:{item.type}</h3>
            <h4>Price:{item.price}</h4>

            <Button
              className="bg-red-500 rounded-md text-white p-2 w-[100px] mt-5"
              text="Remove"
              onClick={() => dispatch(removeWishlist(item))}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default WishListCard;
