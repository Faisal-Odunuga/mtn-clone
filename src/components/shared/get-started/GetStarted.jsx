import React from "react";
import ButtonOutline from "../../ui/button/ButtonOutline";

const GetStarted = () => {
  return (
    <section className="min-h-[65vh] w-[95%] mx-auto bg-getStarted bg-cover bg-center bg-no-repeat rounded-3xl shadow-linkShadow text-white md:p-20 md:pt-36 p-0 pt-32 px-10">
      <div className="w-full md:w-[45%] h-fit">
        <h2 className="xxs:text-5xl md:text-6xl font-extrabold">
          Enjoy access to your favorite social media apps
        </h2>
        <ButtonOutline
          text={"Get Started"}
          className={"border-white text-white hover:text-black"}
        />
      </div>
    </section>
  );
};

export default GetStarted;
