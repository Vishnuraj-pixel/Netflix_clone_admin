import React, { useEffect, useRef, useReducer } from "react";
import Container from "../assets/styles/UpdateMovie";
import { MdUpdate } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  closeUpdateMovieModal,
  updateMovie,
} from "../features/Movies/movieSlice";
import { updateMovieReducer } from "../services/reducers/updateMovieReducer";
import Badge from "./Badge";
import toast from "react-hot-toast";

export default function UpdateMovie({ movieData }) {
  const castsRef = useRef();
  const directorsRef = useRef();
  const producersRef = useRef();
  const writersRef = useRef();
  const dispatched = useDispatch();
  const [state, dispatch] = useReducer(updateMovieReducer, {
    cast: [],
    director: [],
    producer: [],
    writer: [],
  });

  const { cast, director, producer, writer } = state;

  useEffect(() => {
    console.log(state, "stateFromUpdateReducer");
  });

  const removeCasts = (value) => {
    dispatch({
      type: "remove_casts",
      payload: value,
    });
  };
  const removeDirector = (value) => {
    dispatch({
      type: "remove_directors",
      payload: value,
    });
  };
  const removeProducer = (value) => {
    dispatch({
      type: "remove_producers",
      payload: value,
    });
  };
  const removeWriter = (value) => {
    dispatch({
      type: "remove_writers",
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cast.length > 0 &&
      director.length > 0 &&
      producer.length > 0 &&
      writer.length > 0
    ) {
      const formData = new FormData();
      formData.append("cast", cast);
      formData.append("director", director);
      formData.append("producer", producer);
      formData.append("writer", writer);
      formData.append("movieId", movieData._id);
      dispatched(updateMovie(formData));
      setTimeout(() => {
        dispatched(closeUpdateMovieModal());
      }, 1000);
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <Container>
      <div className="modal">
        <div className="heading">
          <h1>{movieData.name}</h1>
          <AiFillCloseSquare
            className="closeBtn"
            onClick={() => {
              dispatched(closeUpdateMovieModal());
            }}
          />
        </div>
        <form>
          <div className="form-row">
            <label htmlFor="casts" className="form-label">
              casts
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="casts"
                label="casts"
                className="form-control"
                ref={castsRef}
              />
              <button
                className="input-button"
                type="button"
                onClick={() =>
                  dispatch({
                    type: "add_casts",
                    payload: castsRef.current.value,
                  })
                }
              >
                <MdUpdate className="icon" />
              </button>
            </div>
          </div>
          {cast &&
            cast.length > 0 &&
            cast.map((cast, index) => {
              if (cast) {
                return (
                  <Badge key={`cast${index}`} remove={removeCasts}>
                    {cast}
                  </Badge>
                );
              }
            })}

          <div className="form-row">
            <label htmlFor="directors" className="form-label">
              directors
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="directors"
                label="directors"
                className="form-control"
                ref={directorsRef}
              />
              <button
                className="input-button"
                type="button"
                onClick={() =>
                  dispatch({
                    type: "add_directors",
                    payload: directorsRef.current.value,
                  })
                }
              >
                <MdUpdate className="icon" />
              </button>
            </div>
          </div>
          {director &&
            director.length > 0 &&
            director.map((director, index) => {
              if (director) {
                return (
                  <Badge key={`director${index}`} remove={removeDirector}>
                    {director}
                  </Badge>
                );
              }
            })}
          <div className="form-row">
            <label htmlFor="producers" className="form-label">
              producer
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="producers"
                label="producers"
                className="form-control"
                ref={producersRef}
              />
              <button
                className="input-button"
                type="button"
                onClick={() =>
                  dispatch({
                    type: "add_producers",
                    payload: producersRef.current.value,
                  })
                }
              >
                <MdUpdate className="icon" />
              </button>
            </div>
          </div>
          {producer &&
            producer.length > 0 &&
            producer.map((producer, index) => {
              if (producer) {
                return (
                  <Badge key={`producer${index}`} remove={removeProducer}>
                    {producer}
                  </Badge>
                );
              }
            })}
          <div className="form-row">
            <label htmlFor="writer" className="form-label">
              writers
            </label>
            <div className="inputWrapper">
              <input
                type="text"
                name="writers"
                label="writers"
                className="form-control"
                ref={writersRef}
              />
              <button
                className="input-button"
                type="button"
                onClick={() =>
                  dispatch({
                    type: "add_writers",
                    payload: writersRef.current.value,
                  })
                }
              >
                <MdUpdate className="icon" />
              </button>
            </div>
          </div>
          {writer &&
            writer.length > 0 &&
            writer.map((writer, index) => {
              if (writer) {
                return (
                  <Badge key={`writer${index}`} remove={removeWriter}>
                    {writer}
                  </Badge>
                );
              }
            })}
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-red btn-lrge updateButton"
            onClick={handleSubmit}
          >
            Update
          </button>
          <button
            type="reset"
            className="btn btn-red btn-lrge resetButton mrgRight5px"
          >
            Reset
          </button>
        </form>
      </div>
    </Container>
  );
}
