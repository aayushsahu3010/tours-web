import React from "react";

const Form = () => {
  return (
    <div id="Contact" className="max-w-{1140px} m-auto w-full p-4 py-16 ">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We are Standing by </p>
      <div className="grid md:grid-cols-2">
        <img
        className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://plus.unsplash.com/premium_photo-1673515243054-07dda4dc5772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
      </div>
      <form>
        <div className="grid grid-cols-2">
          <input className="border m-2 p-2 " type="text" placeholder="First" />
          <input className="border m-2 p-2 "  type="text" placeholder="Last" />
          <input  className="border m-2 p-2" type="email" placeholder="Email" />
          <input className="border m-2 p-2"type="tel" placeholder="phone " />
          <input  className="border col-span-2 p-2 m-2" type="text" placeholder="Address " />
          <textarea
          className="border col-span-2 p-2 m-2 "
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
