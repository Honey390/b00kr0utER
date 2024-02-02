import React, { useEffect, useState } from "react";
import { Auth } from "../../service/user.service";
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const data = await Auth("user", formData);
    console.log(data);
    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
    
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className=" col-span-1">
          <img
            src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxib29rJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full"
          />
        </div>
        <div className=" col-span-1 rounded-e-lg bg-gray-100">
          <div className="px-10 py-16">
            <h1 className="text-2xl font-bold text-center mb-5 text-orange-950">
              Admin Login
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-11 text-xl font-semibold text-orange-950">
                <label htmlFor="name">Email</label>
                <div className="flex gap-3 flex-grow">
                  <span className="">:</span>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((pre) => ({ ...pre, email: e.target.value }))
                    }
                    type="text"
                    className="w-full focus-visible:outline-none"
                    name="name"
                    id="name"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-5 font-semibold text-xl text-orange-950">
                <label htmlFor="password">Password</label>
                <div className="flex gap-3 flex-grow">
                  <span className=" pl-3">:</span>
                  <input
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((pre) => ({
                        ...pre,
                        password: e.target.value,
                      }))
                    }
                    type="password"
                    className=" w-full focus-visible:outline-none"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div className="text-center mt-5 ">
                <button
                  type="submit"
                  className=" w-full  px-5 rounded-md py-2 bg-gradient-to-l from-stone-200  to-gray-500 font-semibold text-white "
                >
                  Login
                </button>
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-sm text-red-500">don't have account?</p>
                  <Link to="/">
                    <p className="text-xl font-bold text-orange-900">
                      Register here
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
