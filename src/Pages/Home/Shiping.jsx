// import { icons } from 'react-icons';
import { shippingContent } from '../../data/dummudata';

const ShippingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4  sm:grid-cols-2 w-full justify-items-center my-10">
      {shippingContent.map((item, index) => (
        <div
          className="border-[1px] lg:w-[330px] flex justify-center  py-10 rounded-md shadow-md md:w-[280px] w-[250px] "
          key={index}
        >
          <div className="flex flex-col justify-center items-center gap-1 text-center w-full px-5">
            <div
              className="w-10 h-10 rounded-full bg-black text-white  flex items-center justify-center text-[20px]
        "
            >
              {<item.icon />}
            </div>
            <h3 className="text-[30px] font-[400]">{item.title}</h3>
            <p className="text-[16px] text-center font-[300] leading-[24px] tracking-tight">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShippingCard;
