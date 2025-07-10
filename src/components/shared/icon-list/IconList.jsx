import React from "react";
import nin from "../../../assets/images/nin.svg";
import broadband from "../../../assets/images/router.svg";
import cart from "../../../assets/images/buy-data.svg";
import devices from "../../../assets/images/devices.svg";
import app from "../../../assets/images/mtn-app.svg";
import shop from "../../../assets/images/shop.svg";

const IconList = () => {
  function IconCard({ text, img }) {
    return (
      <span
        className={`xxs:h-28 xxs:w-28 xxs:p-[10px] text-wrap flex flex-col items-center justify-center rounded-full md:w-[11rem] md:h-[11rem]  lg:py-[40px] lg:px-[20px] transition-colors duration-300 ease-in-out hover:bg-hover`}
      >
        <img src={img} alt={img} />
        <p>{text}</p>
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center text-center">
      <IconCard text={"Link your NIN"} img={nin} className={"hover:none"} />
      <IconCard text={"Broadband"} img={broadband} />
      <IconCard text={"Buy Data"} img={cart} />
      <IconCard text={"Devices"} img={devices} />
      <IconCard text={"myMTN NG App"} img={app} />
      <IconCard text={"Shop"} img={shop} />
    </div>
  );
};

export default IconList;
