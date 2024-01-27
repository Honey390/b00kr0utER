import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponent } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, error, loading } = useFetch(GetBookData, "book");
  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap gap-10 justify-between ">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
              <BookListComponent data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
