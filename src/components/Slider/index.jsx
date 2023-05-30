import React, { useEffect } from 'react';
import { sliderData } from '../../data/dummudata';
import { useSelector, useDispatch } from 'react-redux';
import { activateSlider } from '../../app/features/slider/sliderSlice';

const Slider = () => {
  let sliderValue = useSelector((state) => state.slider.value);
  let sliderLength = useSelector((state) => state.slider.length);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(activateSlider(sliderValue));
      sliderValue++;
      if (sliderValue > sliderLength - 1) {
        sliderValue = 0;
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full ">
      {sliderData.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-full  relative${
              item.id === sliderValue ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {item.id === sliderValue && (
              <div className=" transition-transform w-full h-[400px] md:h-[550px]">
                <img src={item.img} alt="" className="w-full h-full" />
                <div className="w-full flex  justify-center absolute  items-center top-[10rem] left-30">
                  <div className=" bg-black text-[#D0D0CF]  max-w-[400px]  h-[100px]flex justify-center  rounded-md shadow-lg  opacity-70 text-center p-10 text-[40px]">
                    {item.text}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
