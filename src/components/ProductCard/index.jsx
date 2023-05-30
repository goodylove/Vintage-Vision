import { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
// productCard
const ProductCard = () => {
  const [favorite, setFavorite] = useState(false);
  const handleFavoriteIcon = () => {
    setFavorite((prev) => !prev);
  };
  return (
    <div className=" h-[220px] max-w-[250px] rounded shadow-lg cursor-pointer  ">
      <div className="w-full relative">
        <img
          src="https://media.istockphoto.com/id/1464122925/photo/young-woman-sitting-on-her-sofa-and-texting-on-her-phone.webp?b=1&s=170667a&w=0&k=20&c=D33noLkYMTe2nLHa68o7K7ycUuq1r33TSXH_1OSnU5E="
          alt=""
          className="w-full h-full rounded-t"
        />
        <div onClick={handleFavoriteIcon}>
          {favorite ? (
            <MdOutlineFavorite className="absolute top-[8rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95" />
          ) : (
            <MdOutlineFavoriteBorder className="absolute top-[8rem] right-7 text-[30px] bg-gray-300 rounded-md px-[5px] text-gray-800 hover:scale-x-95" />
          )}
        </div>
        <div className="flex  gap-2 justify-between px-2  bg-black text-white items-center rounded-b">
          <div className="flex  flex-col py-1">
            <Typography className="font-[300]">sofa</Typography>
            <Typography className=" font-Poppins text-[16px] font-[100]">
              $400
            </Typography>
          </div>
          <div>
            <span className=" line-through text-gray-500 font-[200]">$100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
