import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <div>
      <div className="flex items-center">
        <button className="bg-secondary font-semibold text-white px-3 py-2 rounded">
          Choose Your Party
        </button>
        <FaArrowCircleRight className="text-second ml-2 group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px]  text-white" />
      </div>
    </div>
  );
};

export default PrimaryButton;
