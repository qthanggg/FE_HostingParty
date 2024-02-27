import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import Party1 from "../../assets/party.png";
import Kids from "../../assets/kid.png";
//
//import Party from "../../assets/party.png";
const Banner = () => {
  return (
    <div>
      <div className="container py-14 relative">
        <div>
          <hr className="border-gray-400 w-1/3 mx-auto my-2" />
          <h1 className="py-8 tracking-wide text-2xl font-semibold text-dark text-center">
            Join us and make memories
          </h1>

          <hr className="border-gray-400 w-1/3 mx-auto my-2" />
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  Our bowling parties for kids are fun and easy to plan! Choose
                  a convenient party package or let our event planners design
                  the perfect birthday party, complete with unlimited bowling,
                  arcade games, kid-friendly menus, and fun features like
                  bowling bumpers (no gutter balls ever!).
                </p>
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p>
                  Our bowling parties for kids are fun and easy to plan! Choose
                  a convenient party package or let our event planners design
                  the perfect birthday party, complete with unlimited bowling,
                  arcade games, kid-friendly menus, and fun features like
                  bowling bumpers (no gutter bal ls ever!).
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton />
          </div>
          <div className="absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
            <img src={Kids} alt="" className="max-w-[160px]" />
          </div>
          <div className="absolute -bottom-16 -left-16 sm:bottom-0  sm:left-0 opacity-50 sm:opacity-100">
            <img src={Kids} alt="" className="max-w-[280px]" />
          </div>
          <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100">
            <img src={Kids} alt="" className="max-w-[200px]" />
          </div>
          <div className="hidden sm:block absolute bottom-0 right-0">
            <img src={Kids} alt="" className="max-w-[200px]" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 
          left-1/3 -translate-x-1/2 opacity-50 mt-10"
          >
            <img src={Kids} alt="" className="max-w-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
