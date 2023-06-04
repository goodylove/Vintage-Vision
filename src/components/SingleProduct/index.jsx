import Button from './../Button/index';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../app/features/cart/cartSlice';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from './../footer/index';
import {
  addToWishList,
  removeWishlist,
} from '../../app/features/wishlist/wishlistSlice';

import { useState } from 'react';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.product.singleProducts);
  const { img, price, name, discount, type, id, text, quantity } =
    singleProduct;
  const [addedItems, setAddedItem] = useState(false);
  const [addedwhish, setAddedWish] = useState(false);

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
                  {text}
                </p>
                <div className="flex  items-center my-2 gap-5">
                  <Button
                    onClick={() =>
                      dispatch(
                        addItemsToCart({
                          id: id,
                          name: name,
                          price: price,
                          quantity: quantity,
                          text: text,
                          img: img,
                          type: type,
                          discount: discount,
                        }),
                        setAddedItem(true)
                      )
                    }
                    className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px] text-[12px]"
                    text={addedItems ? 'Added To Cart' : 'Add To Cart'}
                  />
                  <Button
                    onClick={() =>
                      dispatch(addToWishList(singleProduct), setAddedWish(true))
                    }
                    className=" border-[2px] bg-[#0D1C1E] text-[#D0D0CF] rounded-md  shadow-md lg:p-3 hover:bg-white hover:text-black sm:p-[7px] p-[5px] text-[12px]"
                    text={addedwhish ? 'Added To Wishlist' : 'Add To Wishlist'}
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
