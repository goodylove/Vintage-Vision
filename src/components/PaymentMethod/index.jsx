import React from 'react';
import payment from '../../assets/payment.png';

export const PaymentMethod = () => {
  return (
    <div className="flex flex-row p-5 justify-center text-center items-center">
      <div>
        <h1 className="uppercase font-bold text-[30px] text-slate-800 ">
          payment method
        </h1>
        <p className="text-slate-500 font-fonty text-[15px] md:text-[20px] ">
          We accepts the following payment method
        </p>
        <img src={payment} alt="" />
      </div>
    </div>
  );
};
