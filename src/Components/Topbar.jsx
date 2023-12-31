import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const Topbar = () => {
  return (
    <div className="flex justify-between s-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots 
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">TravelLytics</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm bg-gray-100">9AM - 5 AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"/>
          <p className="text-sm bg-gray-100">+91 6266079863</p>
        </div>
        <button>Quote</button>
      </div>
    </div>
  );
};

export default Topbar;
