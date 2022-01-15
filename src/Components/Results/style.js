import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  border-style: solid;
  border-radius: 4vh;
  box-shadow: 2px 2px 10px #888888;
  margin: 1.2vw 1.2vw 1.2vw;
  display: grid;

  img {
    border-radius: 4vh;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 10px #888888;
  }
`;

export const Content = styled.div`
  font-size: 2vh;
  color: black;
`;

export const Container = styled.div`
  a {
    text-decoration: none;
  }

  a:visited:active {
    color: black;
  }

  margin-right: auto;
  margin-left: auto;
  text-align: center;
  display: grid;
  grid-column-gap: px;
  float: left;
  height: 50vh;
  width: 15%;

  margin: 1.2vw 1.2vw 1.2vw;
  margin-left: 3vw;

  /* :hover {
    height: 45vh;
    .columnize {
      width: 80%;
      height: 80%;
    }
    animation: 0.8s animatePic;

    @keyframes animatePic {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    text-align: center;
    display: grid;
    border-style: solid;
    color: #d3d3d3;
    box-shadow: 2px 2px 10px #888888;
    border-radius: 4vh;
  } */

  font-family: "Open Sans", sans-serif;
`;
