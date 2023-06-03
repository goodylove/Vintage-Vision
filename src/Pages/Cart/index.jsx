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
      <main className="my-20 flex items-center justify-center w-full">
        <section className="w-full flex flex-col justify-center items-center">
          <Link to="/" className="w-[67%]">
            <div className="w-full md:hidden  sm:flex  text-start">
              <div className="w-8 h-8 bg-black text-white flex items-center rounded-full justify-center">
                <AiOutlineArrowLeft />
              </div>
            </div>
          </Link>
          {cartItem.length < 1 ? (
            <div className="h-96 items-center flex ">
              <h3>Your Cart Is Empty </h3>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2  justify-items-center  lg:gap-8 md:gap-6 gap-4">
              {cartItem.map((item, index) => (
                <CartItemCard item={item} key={index} />
              ))}
              <div className="flex flex-col">
                <span>totalPrice:${total} </span>
                <Button
                  className="rounded-md p-2 text-white bg-[#0D1C1E] shadow-xl"
                  text="CheckOut"
                />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
