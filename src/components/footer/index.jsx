import { Typography } from '@material-tailwind/react';
import { GoLocation } from 'react-icons/go';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import {
  BsLink45Deg,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0D1C1E] text-[#D0D0CF] py-5">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex w-full justify-between   flex-col sm:flex-col  md:flex-row lg:flex-row gap-4">
          <div className="md:w-[40%]  mb-5 ">
            <div className="">
              <Typography
                variant="h5"
                className="font-bold text-start my-2 text-[18px]"
              >
                VINTAGE VISION
              </Typography>
              <Typography
                variant="small"
                className="leading-[20px] tracking-normal max-w-[400px] text-start"
              >
                Vintage Vision is clearing and creating living spaces that are
                visually appealing and more attractive to the human eye.
                Designing and decorating our homes is something we can easily
                envision. We all know what our ideal home looks like, and often
                it's making this vision a reality that's difficult to achieve
              </Typography>
            </div>
          </div>
          <div className="flex justify-between md:w-[60%] flex-col md:flex-row  lg:flex-row  sm:flex-col gap-4">
            <div className=" text-start">
              <Typography
                variant="h5"
                className="font-[600] text-[18px] font-Poppins py-1"
              >
                information
              </Typography>
              <span className="flex items-center  py-1">
                <GoLocation className="text-[25px]  bg-white rounded-full text-black text-center px-[6px] mr-1" />
                <Typography>satelite town lagos nigeria</Typography>
              </span>
              <span className="flex items-center py-1">
                <IoIosCall className="text-[24px] bg-white rounded-full text-black text-center mr-1 px-[6px]" />
                <a href="tel:+2349068557284">+2349068557284</a>
              </span>
              <span className="flex items-center py-1">
                <AiOutlineMail className="text-[24px]  bg-white rounded-full text-black text-center mr-1 px-[6px]" />
                <a href="mailTo:goodyc474@gmail.com">goodyc474@gmail.com</a>
              </span>
            </div>
            <div className="">
              <Typography variant="h5" className="text-[18px] font-[600] py-1">
                Important Links
              </Typography>
              <div className=" flex flex-col justify-center ">
                <span className="flex items-center py-1 ">
                  <BsLink45Deg />
                  <Link to="/">Home</Link>
                </span>
                <span className="flex items-center py-1">
                  <BsLink45Deg />
                  <Link to="/about">About</Link>
                </span>
                <span className="flex items-center py-1">
                  <BsLink45Deg />
                  <Link to="/contact">Contact Us</Link>
                </span>
              </div>
            </div>
            <div className="">
              <Typography variant="h5" className="font-[600] text-[18px] py-1">
                connet with Goodness
              </Typography>
              <div className="flex justify-between pt-3 max-w-[180px]">
                <span>
                  <a href="https://www.linkedin.com/in/nwachukwu-goodness-161910219">
                    <BsLinkedin className=" bg-white rounded-full text-black text-center  p-2 text-[33px]" />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/goodylove475">
                    <BsInstagram className=" bg-white rounded-full text-black text-center  p-2 text-[33px] " />
                  </a>
                </span>
                <span>
                  <a href="https://www.github.com/goodylove">
                    <BsGithub className=" bg-white rounded-full text-black text-center p-2 text-[33px] " />
                  </a>
                </span>
                <span>
                  <a href="https://www.twitter.com/goodylove474">
                    <BsTwitter className=" bg-white rounded-full text-black text-center  p-2 text-[33px]" />
                  </a>
                </span>
                <span>
                  <a href="https://my-portfolio-one-snowy-78.vercel.app">
                    <FiExternalLink className=" bg-white rounded-full text-black text-center p-2 text-[33px]" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="text-[20px]  border-1" />
      <div className="flex justify-center w-full my-3 ">
        <div className="flex justify-around w-full py-1 items-center gap-3 flex-col md:flex-row">
          <Typography>
            Website built by <i>GOODNESS</i>
          </Typography>
          <Typography>
            &copy; VINTAGE VISION &nbsp;
            {currentYear}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
