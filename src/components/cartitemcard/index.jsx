import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Footer from './../footer/index';
import Button from '../Button';
const CartItemCard = () => {
  return (
    <>
      <main className="flex w-full justify-center items-center my-10">
        <section className="flex flex-col md:flex-row sm:flex-col lg:flex-row gap-6 my-10 items-center">
          <div>
            <img
              src="https://media.istockphoto.com/id/1328744010/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=l5r2BiGHF2R_6Zfu6ttQKFx7xrpHssrTbYNFgLrrNkA="
              alt=""
            />
          </div>

          <div>
            <h3>name</h3>
            <h4>price</h4>
            <h4>quanity</h4>

            <div className="flex gap-3 items-center">
              <AiOutlineMinusCircle />
              <span>price</span>
              <AiOutlinePlusCircle />
            </div>
            <Button
              className="bg-red-500 rounded-md text-white p-2 w-[100px] mt-5"
              text="Remove"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CartItemCard;
