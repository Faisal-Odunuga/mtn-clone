import React from "react";
import more from "../../../assets/images/next.svg";

const Help = () => {
  function Link({ text, className }) {
    return (
      <div
        className={`border-b-2 border-b-[#E8E8E8] py-6 flex items-center justify-between px-4 hover:bg-[#E8E8E8] hover:rounded-3xl ${className}`}
      >
        {text}
        <img src={more} alt="more" className="" />
      </div>
    );
  }

  return (
    <section className="md:max-w-[80%] space-y-10 max-w-[90%] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20 border-b">
        <div className="space-y-4 px-10 pt-20">
          <input
            type="search"
            placeholder="Search help..."
            id=""
            className="p-3 border w-full"
          />
          <Link text={"See more"} />
          <Link text={"See more"} />
          <Link text={"See more"} />
        </div>
        <div className="bg-mtn min-h-[30vh] space-y-6 px-10 pt-20 rounded-3xl">
          <h6 className="text-sm">Need Help?</h6>
          <h2 className="text-2xl font-bold">Buy a SIM card</h2>
          <p className="pb-8 border-b-2 border-white">
            A SIM card is included in every prepaid – PayAsYouGo – starter pack
            bought at any MTN Store or participating retailer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;
