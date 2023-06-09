import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../../app/features/login/loginSlice';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  select,
} from '@material-tailwind/react';

export default function Login() {
  const initialState = {
    name: '',
    password: '',
    img: '',
  };
  const [loginInfo, setLoginInfo] = useState(initialState);
  const authUser = useSelector((state) => state.login.user.authUser);
  const [checkvalidPassword, setCheckValidPassword] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const handleClick = () => {
    dispatch(AddUser(loginInfo));
    if (!authUser) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  };

  return (
    <div className="w-full  flex justify-center items-center mt-10  ">
      <div className="mt-[4rem]">
        <div className="text-center bg-[#0D1C1E] p-7 rounded-t-md text-white">
          SIGIN IN
        </div>
        <div
          action=""
          className="border-[1px]  h-[300px] w-[350px] flex flex-col p-5  gap-3 rounded-md  shadow-md"
        >
          <input
            type="text"
            name="name"
            value={loginInfo.name}
            placeholder="Name"
            className="border-[1px] p-2 font-[300] outline-none rounded-md"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={loginInfo.password}
            className={`border-[1px] p-2 font-[300] outline-none  rounded-md ${
              checkvalidPassword ? 'border-red-100' : ''
            } `}
            onChange={handleInputChange}
          />
          {checkvalidPassword && (
            <span className="text-[9px] text-red-600">
              password must be at least 8 characters and not more than 10
              characters long and must include number and letters.
            </span>
          )}
          <input
            type="text"
            name="img"
            value={loginInfo.img}
            placeholder="Image Url"
            className="border-[1px] p-2 font-[300] outline-none  rounded-md"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            onClick={handleClick}
            className="border-[1px] p-2 bg-[#0D1C1E] text-white  rounded-md shadow-md font-[300]"
          >
            SIGIN IN
          </button>
          <span className="text-center font-[300]">Image is optional</span>
        </div>
      </div>
    </div>
  );
}
