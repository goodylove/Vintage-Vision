import CartItemCard from '../../components/cartitemcard';
import { useSelector } from 'react-redux';
import Footer from './../../components/footer/index';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  let total;
  let getTotal = cartItem.map((item, index) => {
    return item.price * item.quantity;
  });
  if (getTotal.length > 0) {
    total = getTotal.reduce((acc, item) => {
      return acc + item;
    });
  }
  return (
    <>
      <main className="my-20 flex items-center justify-center w-full flex-col">
        <section className="w-full flex flex-col justify-center items-center">
          <Link to="/" className="w-[67%]">
            <div className="w-full md:hidden  sm:flex  text-start">
              <div className="w-8 h-8 bg-black text-white flex items-center rounded-full justify-center">
                <AiOutlineArrowLeft />
              </div>
            </div>
          </Link>
          {cartItem.length < 1 ? (
            <div className="h-96 items-center flex flex-col ">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <h3>Your Cart Is Empty </h3>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2  justify-items-center  lg:gap-8 md:gap-6 gap-4">
              {cartItem.map((item, index) => (
                <CartItemCard item={item} key={index} />
              ))}
            </div>
          )}
        </section>
        {cartItem.length > 0 && (
          <div className="flex flex-col">
            <span>totalPrice:${total} </span>
            <Link to="/checkout">
              <Button
                className="rounded-md p-2 text-white bg-[#0D1C1E] shadow-xl"
                text="CheckOut"
              />
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
