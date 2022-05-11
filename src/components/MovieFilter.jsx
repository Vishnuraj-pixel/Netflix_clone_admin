import { useEffect } from "react";
import React from "react";
import Container from "../assets/styles/MovieFilter";
import moment from "moment";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../features/Movies/movieSlice";

const MovieFilter = () => {
  const { isLoading, movie } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const catagories = [
    "Action",
    "Animation",
    "Comedy",
    "Documentary",
    "Horror",
    "Mystry",
    "Romance",
    "Superhero",
  ];

  const filteredByDate = [
    { name: "Old", from: "1997", to: "2019" },
    { name: "New", from: "2020", to: moment().format("YYYY") },
    {
      name: "Upcoming",
      from: moment(moment(moment().format("YYYY")).add(1, "years")).format(
        "YYYY"
      ),
      to: moment(moment(moment().format("YYYY")).add(2, "years")).format(
        "YYYY"
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAllMovies());
    return () => {
      dispatch(getAllMovies());
    };
  }, []);

  return (
    <Container>
      <form>
        <span className="catagory">Filtered By Catagory</span>
        <div className="flex">
          {catagories.map((catagory, index) => {
            return (
              <div key={`catagory${index}`}>
                <button type="button" className="catagoryName">
                  {catagory}
                </button>
              </div>
            );
          })}
        </div>
        <br />
        <span className="catagory">Filtered By Date</span>
        <div className="flex">
          {filteredByDate.map((catagory, index) => {
            return (
              <div key={`catagory${index}`}>
                <button type="button" className="catagoryName">
                  {`${catagory.name}(${catagory.from} - ${catagory.to})`}
                </button>
              </div>
            );
          })}
        </div>
        <br />
        <div className="searchWrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search keyword"
          />
          <FiSearch className="icon" />
          {/* <CgSearchLoading className="icon" /> */}
        </div>
      </form>
    </Container>
  );
};

export default MovieFilter;
