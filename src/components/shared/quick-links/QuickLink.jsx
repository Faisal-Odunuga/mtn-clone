import React from "react";
import BtnArrow from "../../ui/button/BtnArrow";
import previousArrow from "../../../assets/images/previous.svg";
import nextArrow from "../../../assets/images/next.svg";

const QuickLink = () => {
  const slides = ["Roaming", "Device Financing", "4G LTE", "MTN Pulse", "NIN"];

  function Slide({ index, text, className = "" }) {
    return (
      <div
        className={`slide w-[350px] h-full absolute transition-all rounded-3xl duration-300 flex flex-col gap-10 items-center bg-red-500 justify-center translate-x-[${
          index * 113
        }%] ${className}`}
      >
        <h2 className="text-2xl font-[700] text-center">{text}</h2>
        <p className="font-[700] text-center">Find out more</p>
      </div>
    );
  }

  function handleNext() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(1 - i) * 113}%)`;
    });
  }
  function handlePrevious() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${i * 113}%)`;
    });
  }
  return (
    <section className="h-[95vh] w-[95%] mx-auto bg-quickLink bg-cover bg-center bg-no-repeat flex justify-center items-end rounded-3xl shadow-linkShadow text-white pb-10">
      <div className="w-[95%] flex flex-col justify-center items-center gap-10">
        <h2 className="text-6xl font-[700] text-center">Quick Links</h2>
        <div className="flex justify-between items-center gap-10 w-full">
          <BtnArrow arrow={previousArrow} onClick={handlePrevious} />
          <div className="basis-[90%] relative flex h-[30vh] overflow-hidden">
            {slides.map((text, index) => (
              <Slide key={index} text={text} index={index} />
            ))}
          </div>
          <BtnArrow arrow={nextArrow} onClick={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default QuickLink;
