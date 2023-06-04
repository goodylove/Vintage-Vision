import { useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Footer from './../../components/footer/index';

const PaymentDetails = () => {
  const initaialState = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
  };

  const [values, setValues] = useState(initaialState);
  console.log(values);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      <main className="my-20 flex items-center justify-center  flex-col ">
        <div className=" justify-center flex  items-center  p-2">
          <form
            action=""
            className="  flex flex-col justify-center w-full  text-[14px]"
          >
            <div className="flex flex-col my-2 gap-3 w-full">
              <label htmlFor="email" className="text-[10px] font-[400]">
                {' '}
                Email
              </label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="border-2 rounded-md p-1 w-[211px]  md:w-[300px] bg-gray-200 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="firstname" className="text-[10px] font-[400]">
                FirstName
              </label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="border-2 rounded-md p-1 w-[211px]  md:w-[300px] bg-gray-200 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="LastName" className="text-[10px] font-[400]">
                LastName
              </label>
              <input
                type="text"
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                className="border-2 rounded-md p-1 w-[211px]  md:w-[300px] bg-gray-200 outline-none text-[11px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="city " className="text-[10px] font-[400]">
                City
              </label>
              <input
                type="text"
                value={values.city}
                name="city"
                onChange={handleChange}
                className=" rounded-md p-1 w-[211px]  md:w-[300px] bg-gray-200 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phoneNumber" className="text-[10px] font-[400]">
                Phone Number
              </label>
              <input
                type="text"
                value={values.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                className="border-2 rounded-md p-1 w-[211px]  md:w-[300px] bg-gray-200 outline-none"
              />
            </div>
            <Link
              to={
                values.email &&
                values.firstName &&
                values.lastName &&
                values.city &&
                values.phoneNumber
                  ? '/checkout'
                  : ''
              }
              className="text-center my-5 "
            >
              <Button
                className="w-[200px] bg-[#0D1C1E] text-white py-2 rounded"
                text="Proceed to Payment"
              />
            </Link>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentDetails;
