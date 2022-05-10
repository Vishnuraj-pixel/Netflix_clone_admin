import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";

const Badges = ({ children, removeTagline }) => {
  if (children) {
    return (
      <Container>
        <span className="addMe">{children}</span>
        <a className="icon">
          {" "}
          <AiFillCloseCircle
            id="icon-close"
            onClick={() => removeTagline(children)}
          />
        </a>
      </Container>
    );
  }
};

export default Badges;

const Container = styled.span`
  background: var(--primary-500);
  font-size: 0.95em;
  padding: 0.35em 0.65em;
  color: #fff;
  margin: 0 0.1em;
  border-radius: 50em;
  .icon {
    cursor: pointer;
    opacity: 0.6;
    #icon-close {
      color: #fff;
      padding-top: 2.5px;
    }
  }
  .icon:hover {
    opacity: 1;
  }
`;
