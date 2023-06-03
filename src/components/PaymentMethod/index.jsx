import React from 'react';
import payment from '../../assets/payment.png';

const PaymentMethod = () => {
  return (
    <div className="flex  p-5 justify-center text-center items-center">
      <div>
        <h1 className="uppercase font-[500] text-[25px]  ">payment method</h1>
        <p className="text-[15px] md:text-[20px] font-Poppins font-[300] ">
          We accepts the following payment method
        </p>
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default PaymentMethod;
