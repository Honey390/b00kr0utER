import React, { useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { API_URL } from "../../../lib/constant";

const Registration = () => {
  const nav=useNavigate();
  const [userName,setUserName]=useState("");
  const [userEmail,setUserEmail]=useState("");
  const [userPassword,setUserPassword]=useState("");
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleUserEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handleUserPassword = (event) => {
    setUserPassword(event.target.value);
  };
  const registerBtn = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
        id:Date.now(),
        username:userName,
        email: userEmail,
        password:userPassword,
    })
    const myHeader = new Headers();
    myHeader.append("Content-Type","application/json");

    const res = await fetch(API_URL+"user",{
        method: "POST",
        headers: myHeader,
        body: data,
    });

    setUserEmail("");
    setUserName("");
    setUserPassword("");
    nav("/admin");

    const json = await res.json();
   
}
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" col-span-1 h-[700px]">
          <img
            src="https://images.pexels.com/photos/4065884/pexels-photo-4065884.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className=" h-full w-full"
          />
        </div>
        <div className=" col-span-1 rounded-e-lg bg-gray-100">
          <div className="px-10 py-16">
            <h1 className="text-3xl px-28 font-bold uppercase mb-5  text-orange-950">
              Registration
            </h1>
            <form onSubmit={registerBtn}>
              <div className="flex gap-20 text-lg font-bold text-orange-950">
                <label htmlFor="name">UserName</label>
                <div className="flex gap-3">
                  <span>:</span>
                  <input
                    required
                    value={userName}
                    onChange={handleUserName}
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
                    value={userEmail}
                    onChange={handleUserEmail}
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
                    value={userPassword}
                    onChange={handleUserPassword}
                    className=" focus-visible:outline-none"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-5 font-bold text-lg text-orange-950">
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <div className="flex gap-3">
                  <span>:</span>
                  <input
                    type="password"
                    value={userPassword}
                    onChange={handleUserPassword}
                    className=" focus-visible:outline-none"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
              </div>
              <div className=" mt-5 flex justify-between items-center">
                <button
                  type="submit"
                  
                  className="  px-5 rounded-md py-2 bg-gradient-to-l from-stone-200  to-orange-700 font-bold text-white "
                >
                  Register
                </button>
                <Link to={"/admin"}>
                  <h1 className="text-xl font-semibold  text-orange-950">
                    Already have an account?
                  </h1>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
