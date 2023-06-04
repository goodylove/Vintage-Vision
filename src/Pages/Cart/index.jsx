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
            <div className="h-96 items-center flex flex-col justify-center ">
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
            <span className="my-5">TotalPrice:${total} </span>
            <Link to="/checkout">
              <Button
                className="rounded p-2 text-white bg-[#0D1C1E] shadow-xl w-[240px]"
                text="Proceed to Checkout"
              />
            </Link>
            <Link to="/" className="text-center my-4 text-[#0D1C1E] underline">
              <h3>Continue Shopping</h3>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
