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
    <div className=" ">
      {sliderData.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-full   ${
              item.id === sliderValue
                ? '   duration-700 ease-in'
                : '  duration-700 ease-in'
            }`}
          >
            {item.id === sliderValue && (
              <div className="w-full  md:h-[500px]  h-[400px] ">
                <img src={item.img} alt="" className="w-full  h-full" />
                <div className="w-full flex  justify-center absolute  items-center md:top-[10rem] left-30 top-[9rem]   -z-1">
                  <div className=" bg-black text-[#D0D0CF]  max-w-[340px]  max-h-[200px]  flex justify-center  rounded-md shadow-lg  opacity-[0.5] text-center p-10 text-[40px]">
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
