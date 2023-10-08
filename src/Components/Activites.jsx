import React from "react";

const Activites = () => {
  return (
    <div className="max-w-{1140px} m-auto w-full md:flex mt0[-75%]">
      <div  className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold">Resorts </h3>
        <img className="w-full h-full object-cover relative border-white shadow-lg"
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          alt="/"
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold"> Excursion</h3>
        <img className="w-full h-full object-cover relative border-white shadow-lg"
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmElMjBkaXZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
          alt="/"
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold">cruises </h3>
        <img className="w-full h-full object-cover relative border-white shadow-lg"
          src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          alt="/"
        />
      </div>

    </div>
  );
};

export default Activites;
