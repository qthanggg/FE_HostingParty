import React from "react";
import BgPolygon from "../../assets/polygon.png";
import { FaUser } from "react-icons/fa";
import Vector from "../../assets/vector-wave.png";
const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};
const About = () => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative">
          <h1 className="pt-20 tracking-wide text-4xl font-semibold text-white text-center">
            About Us
          </h1>
          <div className="bg-white/80 p-10 my-10">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
            <div className="pt-10 flex justify-center">
              <button
                className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white
              px-5 py2 hover:scale-105 duration-300"
              >
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Vector} alt="" className="absolute top-0 right-0 w-full" />
        </div>
      </div>
    </>
  );
};

export default About;
