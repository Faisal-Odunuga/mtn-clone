import React from "react";
import ButtonOutline from "../../ui/button/ButtonOutline";

const Devices = () => {
  function Device({ className, children }) {
    return (
      <div
        className={`xxs:h-[60vh] md:h-full bg-cover bg-center rounded-3xl ${className}`}
      >
        {children}
      </div>
    );
  }

  function Heading({ text, className }) {
    return (
      <h2 className={`text-[32px] leading-[40px] font-bold ${className}`}>
        {text}
      </h2>
    );
  }

  return (
    <section className="md:max-w-[80%] bg-white mt-[-1rem] space-y-10 max-w-[90%] mx-auto md:mt-0 ">
      <div className="px-10 relative flex items-center justify-center">
        <h2 className="uppercase xxs:text-5xl md:text-6xl font-extrabold">
          Devices
        </h2>
        <ButtonOutline
          text={"ALL DEVICES"}
          className={"absolute right-0 xxs:hidden lg:block"}
        />
      </div>

      <div className="block h-full space-y-5 md:grid md:grid-cols-2 md:min-h-[80vh] grid-rows-[45%_45%] items-center justify-center gap-6 border-b">
        <Device
          className={"bg-fiveG  md:row-span-2 text-white p-[3rem] pe-[4rem]"}
        >
          <div className="flex flex-col justify-between h-full">
            <Heading
              className={"lg:text-[56px] lg:leading-[60px]"}
              text={"5G Broadband Router"}
            />
            <div>
              <h2 className="text-[32px] md:text-[56px] leading-[32px] md:leading-[60px] font-bold">
                N80,000
              </h2>
              <h2 className="font-extrabold">Price</h2>
            </div>
          </div>
        </Device>

        <Device className={"bg-fourG xxs:bg-right p-[2rem] pe-[4rem]"}>
          <div className="flex flex-col justify-between h-full">
            <span>
              <h2 className="font-extrabold">DEALS</h2>
              <Heading text={"4G Broadband Router(Standard)"} />
            </span>

            <div>
              <h2 className="text-[32px] font-bold">N20,000</h2>
              <h2 className="text-sm font-bold">Price</h2>
            </div>
          </div>
        </Device>

        <Device
          className={"bg-fibreX xxs:bg-right p-[2rem] pe-[2rem] text-white"}
        >
          <div className="flex flex-col justify-between h-full">
            <span>
              <h2 className="font-extrabold">DEVICES</h2>
              <Heading text={"FibreX"} />
            </span>

            <div>
              <h2 className="text-[32px] font-extrabold">N10,000</h2>
              <h2 className="text-sm font-extrabold">Price</h2>
            </div>
          </div>
        </Device>
      </div>
    </section>
  );
};

export default Devices;
