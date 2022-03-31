import React from "react";
import { Link } from "react-router-dom";
import { CgHomeAlt } from "react-icons/cg";

const Missing = () => {
  return (
    <div className="mx-9">
      <section className="bg-base-100 py-[120px] relative z-10">
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center flex flex-col items-center">
                <h2
                  className="
                  font-bold
                  text-white
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  "
                >
                  404
                </h2>
                <h4 className="text-white font-semibold text-[22px] leading-tight mb-3">
                  Oops! That page can’t be found
                </h4>
                <p className="text-lg text-white mb-8">
                  The page you are looking for it maybe deleted
                </p>
                <button className="flex items-center justify-center w-16 p-2 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                  <CgHomeAlt className="text-xl p-1" />
                  <Link to="/">Go To Home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
        >
          <div className="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="w-1/3 h-full flex">
            <div
              className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
            ></div>
            <div
              className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
            ></div>
          </div>
          <div className="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </div>
  );
};

export default Missing;
