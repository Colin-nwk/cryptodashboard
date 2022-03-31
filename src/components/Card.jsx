import React from "react";
import { BsCurrencyBitcoin, BsSearch } from "react-icons/bs";

const Card = ({ title, amount, icon }) => {
  return (
    <>
      <div className=" overflow-clip p-4 w-48 flex-1 gap-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {amount}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {title}
        </p>
      </div>
    </>
  );
};

export default Card;
