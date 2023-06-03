import React from 'react';
import { useDispatch } from 'react-redux';
import { productType } from '../../app/features/filterProduct/filterproductSlice';
import { useState } from 'react';

const ListOfProduct = ({ data, values, handlerChange }) => {
  // const [values, setValues] = useState('rooms');
  // const dispatch = useDispatch();

  // const handlerChange = (e) => {
  //   let value = e.target.value;
  //   dispatch(productType(value));

  //   setValues(value);
  // };

  return (
    <div>
      <h3 className="text-[13px] md:text-[20px] font-[300]">filter items</h3>
      <select
        name=""
        id=""
        value={values}
        onChange={handlerChange}
        className=" bg-black text-white text-[13px] md:py-2 font-[300] rounded-sm py-[2px] mr-4"
      >
        {data.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListOfProduct;
