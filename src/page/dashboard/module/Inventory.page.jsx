import React from "react";
import { useLocation } from "react-router-dom";

const InventoryPage = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl px-28 font-bold uppercase mb-5  text-orange-950">
          Registration
        </h1>
        <form>
          <div className="flex gap-20 text-lg font-bold text-orange-950">
            <label htmlFor="name">UserName</label>
            <div className="flex gap-3">
              <span>:</span>
              <input
                required
                type="username"
                className=" focus-visible:outline-none"
                name="username"
                id="username"
              />
            </div>
          </div>
          
          <div className="flex gap-[7.6rem] mt-5 text-lg font-bold text-orange-950">
            <label htmlFor="email">Email</label>
            <div className="flex gap-3">
              <span>:</span>
              <input
                required
                type="email"
                className=" focus-visible:outline-none"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="flex gap-[89px] mt-5 font-bold text-lg text-orange-950">
            <label htmlFor="password">Password</label>
            <div className="flex gap-3">
              <span>:</span>
              <input
                type="password"
                className=" focus-visible:outline-none"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5 font-bold text-lg text-orange-950">
            <label htmlFor="password"> Confirm Password</label>
            <div className="flex gap-3">
              <span>:</span>
              <input
                type="password"
                className=" focus-visible:outline-none"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className=" mt-5">
            <button
              type="submit"
              className="  px-5 rounded-md py-2 bg-gradient-to-l from-stone-200  to-orange-700 font-bold text-white "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryPage;
