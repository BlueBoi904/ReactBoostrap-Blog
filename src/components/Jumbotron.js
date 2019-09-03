import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import spaceImage from "../assets/space.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${spaceImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .main-header {
    font-weight: 600;
  }
`;

export const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fliud className="jumbo">
        <div className="overlay">
          <Container>
            <h1 className="main-header">Welcome</h1>
            <p className="p-text">Learn to code from my blog</p>
          </Container>
        </div>
      </Jumbo>
    </Styles>
  );
};
