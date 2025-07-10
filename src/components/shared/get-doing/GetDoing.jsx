import React from "react";
import connect from "../../../assets/images/loved-ones.svg";
import explore from "../../../assets/images/digital-world.svg";
import productivity from "../../../assets/images/stay-productive.svg";

const GetDoing = () => {
  function Card({ text, heading, img, className }) {
    return (
      <span
        className={`flex flex-col items-center justify-center py-[40px] px-[20px] gap-6 ${className}`}
      >
        <div className="w-20 h-20">
          <img src={img} alt="" className="w-full" />
        </div>
        <h2 className="text-[24px] leading-7 font-extrabold">{heading}</h2>
        <p>{text}</p>
      </span>
    );
  }

  return (
    <section>
      <h2 className="text-center text-4xl font-extrabold pb-10">
        Get doing with MTN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          text={
            "Discover affordable voice and data plans tailored for seamless communication with loved ones"
          }
          img={connect}
          heading={"Connect with Loved Ones"}
          hover={false}
          className={"w-full rounded-none"}
          gap={true}
        />
        <Card
          text={
            "Unlock endless possibilities with our high-speed data plans and robust network coverage"
          }
          img={explore}
          heading={"Explore the Digital World"}
          hover={false}
          className={"w-full rounded-none"}
          gap={true}
        />
        <Card
          text={
            "Leverage innovative solutions designed to boost productivity for professionals and businesses"
          }
          img={productivity}
          heading={"Stay Productive on the Go"}
          hover={false}
          className={"w-full rounded-none"}
          gap={true}
        />
      </div>
    </section>
  );
};

export default GetDoing;
