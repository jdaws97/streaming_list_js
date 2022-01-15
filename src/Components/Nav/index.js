import React, { useState, useEffect, useRef } from "react";
// import { Redirect, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <a href="https://www.github.com/jdaws97">
        <h3>Github</h3>
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
    </Wrapper>
  );
};

export default Nav;
