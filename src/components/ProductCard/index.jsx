import { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import Button from './../Button/index';
// productCard
const ProductCard = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavoriteIcon = () => {
    setFavorite((prev) => !prev);
  };
  return (
    <div className="rounded shadow-lg cursor-pointer flex justify-center items-center gap-2  ">
      <div className="relative  h-auto ">
        <div className="max-w-[400px] h-[200px]">
          <img src={item.img} alt="" className=" rounded-t h-full w-full" />
        </div>
        <div onClick={handleFavoriteIcon}>
          {favorite ? (
            <MdOutlineFavorite className="absolute top-[10rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95 lg:top-[10rem]" />
          ) : (
            <MdOutlineFavoriteBorder className="absolute top-[10rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95 lg:top-[10rem]" />
          )}
        </div>
        <div className="flex  gap-2 justify-between px-2  bg-black text-white items-center rounded-b py-2">
          <div className="flex  flex-col py-1">
            <Typography className="font-[300] text-[18px]">
              {item.title.charAt('0').toUpperCase() + item.title.slice(1)}
            </Typography>
            <Typography className=" font-Poppins text-[16px] font-[100]">
              ${item.price}
            </Typography>
          </div>
          <div
            className="flex flex-col text-center gap-2
          "
          >
            <span className=" line-through text-gray-500 font-[200]">
              ${item.discount}
            </span>
            <Button
              className={
                'text-[12px] font-[200] border-[1px] px-[3px] rounded py-[2px]'
              }
              text="Details"
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
