import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img
        src="https://images.unsplash.com/photo-1693935597805-f574d2fdc0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4  ">
          <h1 className="font-bold text-4xl">Find Your Special Trip </h1>
          <h2 className="text-4xl py-4 italic">with TravelLytics</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            itaque qui voluptates excepturi ducimus? Sint sequi dolore
            recusandae, maxime iusto debitis pariatur aspernatur, magnam
            architecto earum laudantium, ipsa eligendi sed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
