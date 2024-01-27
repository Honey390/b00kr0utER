import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div className="">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
              
              <div className="flex flex-wrap ">
                <img src={data.img} alt="bookImg" className="h-[400px] w-1/3" />
                <div className=" px-5  pt-28 w-[650px] rounded-e-lg  bg-gradient-to-r from-stone-300 to-orange-600 ">
                  <div className="pb-3">
                    <h1 className="  text-2xl font-bold text-orange-700 font-serif pb-1">
                      {data.title}
                    </h1>
                    <h2 className="  text-lg font-semibold text-orange-400">
                      {data.author}
                    </h2>
                  </div>
                  <div className="mb-3">
                    <p className=" text-base text-orange-600">
                      {data.description}
                    </p>
                  </div>
                  <button onClick={handleBack} className="  px-5 rounded-md py-3 bg-gradient-to-l from-stone-300 to-orange-600 font-semibold text-white ">Back</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
