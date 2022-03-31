import React from "react";
import { Link } from "react-router-dom";
// import { ImDiamonds } from "react-icons/im";
import { CgHomeAlt } from "react-icons/cg";
import { FaCoins, FaExchangeAlt, FaStackExchange } from "react-icons/fa";
import { BiNews } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed inset-0 w-16 flex flex-col justify-center  mx-3">
        <ul className="bg-white shadow-md w-full flex flex-col items-center justify-center space-y-10  rounded-md h-3/4 backdrop-blur-md">
          <Link
            to="/"
            className="w-full p-3 cursor-pointer hover:btn-hover transition-all active:btn-active text-center flex items-center justify-center"
          >
            <CgHomeAlt className="text-3xl " />
          </Link>
          <Link
            to="/news"
            className="w-full p-3 cursor-pointer hover:btn-hover transition-all active:btn-active flex items-center justify-center"
          >
            <BiNews className="text-3xl " />
          </Link>
          <Link
            to="/cryptocurrencies"
            className="w-full p-3 cursor-pointer hover:btn-hover transition-all active:btn-active flex items-center justify-center"
          >
            <FaStackExchange className="text-3xl " />
          </Link>
          <Link
            to="/exchange"
            className="w-full p-3 cursor-pointer transition-all active:btn-active flex items-center justify-center hover:btn-hover"
          >
            <FaExchangeAlt className="text-3xl " />
          </Link>
          <li className="w-full p-3 cursor-pointer transition-all active:btn-active flex items-center justify-center hover:btn-hover">
            <FaCoins className="text-3xl " />
          </li>
        </ul>
      </aside>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
