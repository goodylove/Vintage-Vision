import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Button from '../Button';
const CartItemCard = ({ item }) => {
  return (
    <>
      <main className="flex w-full justify-center items-center my-10">
        <section className="flex flex-col md:flex-row sm:flex-col lg:flex-row gap-6 my-10 items-center">
          <div className="max-w-[400px] h-67">
            <img src={item.img} alt="" className="w-full h-full" />
          </div>

          <div>
            <h3>Name:{item.name}</h3>
            <h4>Price:{item.price}</h4>
            <h4>Quantity:{item.quantity}</h4>

            <div className="flex gap-3 items-center">
              <AiOutlineMinusCircle />
              <span>{item.price}</span>
              <AiOutlinePlusCircle />
            </div>
            <Button
              className="bg-red-500 rounded-md text-white p-2 w-[100px] mt-5"
              text="Remove"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default CartItemCard;
