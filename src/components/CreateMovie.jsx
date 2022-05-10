import { useEffect, useReducer, useRef, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Container from "../assets/styles/CreateMovie";
import { createMovie } from "../features/users/movieSlice";
import { reducer } from "../services/reducers/reducer";
import Badge from "./Badge";

const defaultValue = {
  name: "",
  image: [],
  tag_line: ["Sci-fi"],
  release_date: "",
  abstract: "",
  youtube_link: "",
  repeatTagline: false,
  formSubmitData: {},
};

function CreateMovies() {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const { movie, isLoading } = useSelector((store) => store.movie);
  const dispatched = useDispatch();
  const [tagline, setTagline] = useState("");
  // const [movieData, setMovieData] = useState([]);
  const {
    name,
    image,
    tag_line,
    release_date,
    abstract,
    youtube_link,
    repeatTagline,
    catagory,
  } = state;

  useEffect(() => {
    if (repeatTagline) {
      toast.error("Already added in tag line");
    }
    console.info(movie);
  }, [isLoading]);

  const addTagLine = (value) => {
    dispatch({
      type: "add_tag_line",
      payload: value,
    });
  };
  const removeTagline = (value) => {
    if (value) {
      dispatch({
        type: "remove_tag_line",
        payload: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name &&
      image &&
      tag_line &&
      release_date &&
      abstract &&
      youtube_link &&
      catagory
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      formData.append("catagory", catagory);
      formData.append("release_date", release_date);
      formData.append("abstract", abstract);
      formData.append("tag_line", tag_line);
      formData.append("youtube_link", youtube_link);
      dispatched(createMovie(formData));
    } else {
      toast.error("Please fill all fields");
    }

    // dispatch({
    //   type: "clear_data",
    //   payload: defaultValue,
    // });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">movie</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={name}
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "name",
                value: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="catagory">Catagory</label>
          <select
            id="catagory"
            name="catagory"
            className="form-select"
            value={catagory}
            defaultValue="selected"
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "catagory",
                value: e.currentTarget.value,
              })
            }
          >
            <option disabled value="selected">
              Select
            </option>
            <option value="action">Action</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="documentary">Documetary</option>
            <option value="horror">Horror</option>
            <option value="mystry">Mystry</option>
            <option value="romance">Romance</option>
            <option value="superhero">Superhero</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="name">images</label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-input"
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "image",
                value: e.currentTarget.files[0],
              })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="tag_line">tag line</label>
          <input
            type="text"
            id="tag_line"
            name="tag_line"
            className="form-input"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-red mg1-top mg1-bottom"
            onClick={() => addTagLine(tagline)}
          >
            Add
          </button>
          <br />
          {tag_line &&
            tag_line.length > 0 &&
            tag_line.map((tag, index) => {
              if (tag) {
                return (
                  <Badge key={`tag${index}`} removeTagline={removeTagline}>
                    {tag}
                  </Badge>
                );
              }
              return;
            })}
        </div>
        <div className="form-row">
          <label htmlFor="release_date">release date</label>
          <input
            type="text"
            id="release_date"
            name="release_date"
            className="form-input"
            value={release_date}
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "release_date",
                value: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="abstract">Abstract</label>
          <textarea
            type="text"
            id="abstract"
            name="abstract"
            className="form-textarea"
            value={abstract}
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "abstract",
                value: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="youtube_link">Trailer</label>
          <input
            type="text"
            id="youtube_link"
            name="youtube_link"
            className="form-input"
            value={youtube_link}
            onChange={(e) =>
              dispatch({
                type: "inputField",
                field: "youtube_link",
                value: e.currentTarget.value,
              })
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-red btn-lrge"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </Container>
  );
}

export default CreateMovies;
