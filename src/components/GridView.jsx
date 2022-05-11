import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function GridView() {
  // const { loading, movies } = useSelector((store) => store.movie);
  useEffect(() => {
    setTimeout(() => {
      // console.log(movies, loading, "GridView");
    }, 4000);
  }, []);

  // return (
  //   <ul>
  //     {movies &&
  //       movies.map((data) => {
  //         <li key={data._id}>
  //           <button>{data.name}</button>
  //         </li>;
  //       })}
  //   </ul>
  // );
}

export default GridView;
