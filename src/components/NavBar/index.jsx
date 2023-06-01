import { useState } from 'react';
import { Typography, Avatar, Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { Spin as Hamburger } from 'hamburger-react';
import { useSelector } from 'react-redux';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const img = useSelector((state) => state.login.user.img);
  const [search, setSearch] = useState(false);
  return (
    <main className="w-full  flex-col fixed top-0 cursor-pointer z-50">
      {search && (
        <div className="w-52 absolute left-[30%] top-[6rem] ease-in-out  scale-100">
          <Input
            label="search"
            color="blue-gray"
            className=" "
            variant="outlined"
          />
        </div>
      )}
      <nav className="flex justify-between md:px-6 md:py-5 items-center bg-[#0D1C1E]  px-2 py-2">
        <Typography className="text-[20px] text-[#D0D0CF]">
          VINTAGEVISION
        </Typography>
        <ul className="md:hidden  justify-around gap-8 items-center hidden text-[#D0D0CF] sm:hidden lg:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/room">Rooms</Link>
          </li>
          <li>
            <Link to="/furnitures">Furnitures</Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchens</Link>
          </li>
          <li>
            <Link to="/decor">Decor</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center  text-[#D0D0CF] flex-row">
          <MdOutlineFavoriteBorder className=" text-[20px]" />

          <BsSearch onClick={() => setSearch((prev) => !prev)} />
          <BiCart className="text-[25px]" />

          <span className="gap-2 flex items-center">
            {img && <Avatar src={img} alt="avatar" className="w-5 h-5" />}
          </span>
        </div>
        <div className="flex md:hidden text-[#D0D0CF]">
          <Hamburger
            onToggle={(toggleMenu) => {
              if (toggleMenu) {
                setToggleMenu(true);
              } else {
                setToggleMenu(false);
              }
            }}
          />
        </div>
      </nav>
      {toggleMenu && (
        <div className="mt-4 bg-[#0D1C1E] fixed h-[100vh]  top-[48px] w-[50%] flex justify-center  z-50">
          <ul className="  block  gap-8   text-[#D0D0CF]  ">
            <li className="py-3">
              <Link to="/">Home</Link>
            </li>
            <li className="py-3">
              <Link to="/room">Room</Link>
            </li>
            <li className="py-3">
              <Link to="/furnitures">Furnitures</Link>
            </li>
            <li className="py-3">
              <Link to="/kitchen">Kitchen</Link>
            </li>
            <li className="py-3">
              <Link to="/decor">Decor</Link>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Nav;
