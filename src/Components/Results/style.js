import styled from "styled-components";

export const Wrapper = styled.div`
  /* text-align: center; */
  position: relative;
  float: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  height: 46vh;
  width: 18%;
  margin: 1.2vw 1.2vw 1.2vw;
  margin-left: 4.5vw;
  font-size: 1.1vw;
  border-style: solid;
  border-radius: 4vh;
  /* :hover {
    outline: none;
  } */

  box-shadow: 2px 2px 10px #888888;
  /* background-color: #8c92ac; */

  color: black;

  font-family: "Open Sans", sans-serif;
`;

export const Content = styled.div`
display: flex;
  margin-left: 4.5vw;
  font-size: 1.1vw;

  border-radius: 4vh;
`;

export const Container = styled.div``;
