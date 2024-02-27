import React from "react";
import Party from "../../assets/party.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Hero = () => {
  return (
    <div className="relative">
      <img src={Party} className="w-full h-screen object-cover" alt="" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
      <div className="absolute inset-0 flex items-start justify-start p-10">
        <div className="text-balance mt-[300px] ml-[70px]">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Party Like a{" "}
            <span className="text-secondary font-cursive text-7xl">Pro</span>
          </h1>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Plan Like a{" "}
            <span className="text-secondary font-cursive text-7xl">Boss</span>
          </h1>

          <p className="text-white font-bold">
            Bring your guests to the lanes <br />
            and turn every occasion into an epic celebration.
          </p>
          <div className="mt-[10px] ">
            <PrimaryButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
