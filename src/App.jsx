import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import { data } from "autoprefixer";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponent } from "./components";
import NotFound from "../not-found";

const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");
  // console.log(data);

  // const [fetch, setFetch] = useState({
  //   loading: true,
  //   data: null,
  //   error: null,
  // });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await GetBookData("book");
  //       setFetch((pre) => {
  //         return {
  //           error: null,
  //           loading: false,
  //           data: data,
  //         };
  //       });
  //     } catch (e) {
  //       setFetch((pre) => {
  //         return {
  //           error: e.message,
  //           loading: false,
  //           data: null,
  //         };
  //       });
  //     }
  //   })();
  // }, []);
  return (
   <div className="bg-gradient-to-r from-stone-300 to-orange-300 h-[3000px]">
     <div className="main ">
      <NavComponent/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/detail/:id" element={<DetailBookPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
   </div>
  );
};

export default App;

//custom hook

//=>builtin hook =>useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallBack,useMemo etc.....
//=> lib provide hook=>useParams,useNavigate,useLocation,useSearchParams
//=>

{
  /* {loading ? (
      <h1>Loading..</h1>
    ) : (
      <>
        {data ? (
          <div>{JSON.stringify(data)}</div>
        ) : (
          <h1>{error}</h1>
        )}
      </>
    )} */
}
