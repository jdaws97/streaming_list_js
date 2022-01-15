import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, Container } from "./style";
import noImage from "../../Images/no_image.png";

let imageUrl = "https://image.tmdb.org/t/p/w185";

const Results = ({ search, titleData }) => {
  const [titles, setTitles] = useState([""]);
  const [popularity, setPopularity] = useState([""]);
  const [formatData, setFormatData] = useState();
  const [data, setData] = useState([]);

  const popularityOfTitle = () => {
    let x = titleData.sort((x, y) => (x.popularity > y.popularity ? 1 : -1));
    x.reverse();
    console.log(x);
    setData(titleData);

    var sorting = [];

    console.log(sorting);
  };

  useEffect(() => {
    popularityOfTitle();
    // console.log(data);
  }, [titleData]);

  if (data) {
    let myStyle = {
      backgroundImage: imageUrl,
    };
    return (
      <div>
        {data.map((item) => (
          <Container className="container-all">
            <a href="https://www.github.com/jdaws97">
              <Content>
                <h3>{item["title"]}</h3>
                {/* <h3>Popularity: {item["popularity"]}</h3> */}
              </Content>
              <Wrapper className="columnize">
                {item["poster_path"] ? (
                  <img src={imageUrl + item["poster_path"]} />
                ) : (
                  <img src={noImage} />
                )}
                {/* <div
                className="container"
                style={
                  item["poster_path"]
                    ? {
                        backgroundImage: `url(${
                          imageUrl + item["poster_path"]
                        })`,
                        backgroundSize: "cover",
                        //   backgroundPosition: "center",
                        borderRadius: "4vh",
                        backgroundRepeat: "no-repeat",
                        objectFit: "contain",
                      }
                    : {
                        backgroundImage: `url(${noImage})`,
                        backgroundSize: "cover",
                        objectFit: "contain",
                        borderRadius: "4vh",
                        backgroundRepeat: "no-repeat",
                      }
                }
              ></div> */}
              </Wrapper>
            </a>
          </Container>
        ))}
      </div>
    );
  }
  return <div></div>;
};

export default Results;
