import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <div>
            <h1 className="py-10 text-3xl font-bold text-yellow text-center">
              Contact Us
            </h1>
            <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <IoLocationSharp className="text-5xl" />
                </div>
                <p>VRG2+27X, Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương</p>
              </div>

              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <MdEmail className="text-5xl" />
                </div>
                <div>
                  <p>thangphqse162012@fpt.edu.vn</p>
                </div>
              </div>
              <div>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <FaPhone className="text-5xl" />
                  </div>
                  <div>
                    <p>0773840946</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-t border-white mt-5 w-full" />
                <p className="text-center mt-2">
                  2022 TCJ. All rights reserved
                </p>
                <div className="">
                  <div className="flex justify-center gap-6 ">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Condition</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
