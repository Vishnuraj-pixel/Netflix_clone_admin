import { BsFillGridFill, BsList } from "react-icons/bs";
import Container from "../assets/styles/Sort";
import { useState, useEffect } from "react";

function Sort() {
  useEffect(() => {}, []);
  return (
    <Container>
      <div className="grid-1">
        <button>
          <BsFillGridFill className="icon" />
        </button>
        <button className="active">
          <BsList className="icon" />
        </button>
      </div>

      <div className="grid-2">
        <span>20 Items found</span>
      </div>
      <div className="grid-3">
        <hr />
      </div>
    </Container>
  );
}

export default Sort;
