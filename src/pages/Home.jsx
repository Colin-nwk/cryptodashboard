import React from "react";
import { ImDiamonds } from "react-icons/im";
import { BsCurrencyBitcoin, BsSearch } from "react-icons/bs";
import { Card } from "../components";
const Home = () => {
  const cardInfo = [
    {
      title: "name of crypto",
      amount: 1500,
      description: "new crypto",
      icon: "BsCurrencyBitcoin",
    },
    {
      title: "name of crypto 2",
      amount: 2000,
      description: "new crypto",
      icon: "BsCurrencyBitcoin",
    },
    {
      title: "name of crypto 2",
      amount: 2000,
      description: "new crypto",
      icon: "BsCurrencyBitcoin",
    },
    {
      title: "name of 6 crypto",
      amount: 16600,
      description: "new crypto",
      icon: "BsCurrencyBitcoin",
    },
  ];
  return (
    <>
      <main className="mx-9">
        <section className="grid grid-cols-1 md:grid-cols-6 w-full mt-14 gap-8">
          <div className="bg-transparent col-span-full md:col-start-1 md:col-span-4 h-full rounded-md flex flex-wrap gap-8 items-center">
            {cardInfo.map((info, index) => (
              <Card
                key={index}
                title={info.title}
                amount={info.amount}
                icon={info.icon}
              />
            ))}
          </div>
          <div className="bg-red-300 col-span-full md:col-start-5 md:col-end-7 h-full rounded-md">
            Aside
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-mds">
            red
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-6 w-full mt-14 gap-8 h-96">
          <div className="bg-red-300 col-span-full md:col-start-1 md:col-span-4 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-start-5 md:col-end-7 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-md">
            red
          </div>
          <div className="bg-red-300 col-span-full md:col-span-2 h-full rounded-mds">
            red
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
