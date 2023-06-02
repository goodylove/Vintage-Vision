import { useState } from 'react';
import { Typography, Avatar, Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Spin as Hamburger } from 'hamburger-react';

import { useSelector, useDispatch } from 'react-redux';
import { pageProduct } from '../../app/features/filterProduct/filterproductSlice';
import { myLinks } from '../../data/dummudata';

const Nav = () => {
  const disptach = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(false);

  const img = useSelector((state) => state.login.user.img);
  const cartLength = useSelector((state) => state.cart.cartItem.length);
  const wishLength = useSelector(
    (state) => state.wishList.wishLists.wish.length
  );
  const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <main className="w-full  flex-col fixed top-0 cursor-pointer z-50">
      {/* {search && (
        <div className="w-52 absolute left-[30%] top-[6rem] ease-in-out  scale-100">
          <Input
            label="search"
            color="blue-gray"
            className=" "
            variant="outlined"
          />
        </div>
      )} */}
      <nav className="flex justify-between md:px-6 md:py-5 items-center bg-[#0D1C1E]  px-1 py-2 ">
        <Typography className="text-[15px] text-[#D0D0CF] md:text-[20px]  md:font-[600]">
          VINTAGEVISION
        </Typography>
        <ul className="md:hidden  justify-around gap-8 items-center hidden text-[#D0D0CF] sm:hidden lg:flex">
          {myLinks.map((item, index) => {
            return (
              <li className="" key={index}>
                <Link
                  to={item.link}
                  className="uppercase"
                  onClick={() => disptach(pageProduct(item.name))}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2 items-center  text-[#D0D0CF] flex-row">
          <Link to="/whishlist">
            <div className="relative">
              <MdOutlineFavoriteBorder className=" text-[20px]" />
              {wishLength > 0 ? (
                <span className="absolute bg-white text-black p-[6px] w-3 h-3 rounded-full flex justify-center items-center top-[-4px] left-[7px] font-[300] text-[10px]">
                  {wishLength}
                </span>
              ) : (
                ''
              )}
            </div>
          </Link>

          {/* <BsSearch onClick={() => setSearch((prev) => !prev)} /> */}
          <Link to="/cart">
            <div className="relative">
              <BiCart className="text-[25px]" />
              {cartLength > 0 ? (
                <span className="absolute bg-white text-black p-[6px] w-3 h-3 rounded-full flex justify-center items-center top-[-3px] left-[10px] font-[300] text-[10px]">
                  {cartLength}
                </span>
              ) : (
                ''
              )}
            </div>
          </Link>
          <span className="gap-2 flex items-center">
            {img && <Avatar src={img} alt="avatar" className="w-5 h-5" />}
          </span>
        </div>
        <div className="flex md:hidden text-[#D0D0CF]">
          {/* <Hamburger
            onToggle={(toggleMenu) => {
              if (toggleMenu) {
                setToggleMenu(true);
              } else {
                setToggleMenu(false);
              }
            }}
          /> */}
          {toggleMenu ? (
            <AiOutlineClose
              className="text-[45px] pr-3 text-white"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-[40px] pr-3"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>
      {toggleMenu && (
        <div className="mt-[0.8rem] bg-[#0D1C1E] fixed h-[100vh]  top-[48px] w-[50%] flex justify-center  z-50">
          <ul className="  flex flex-col  gap-8   text-[#D0D0CF]  ">
            {myLinks.map((item, index) => {
              return (
                <li
                  className=""
                  key={index}
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  <Link
                    to={item.link}
                    className="uppercase"
                    onClick={() => disptach(pageProduct(item.name))}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Nav;
