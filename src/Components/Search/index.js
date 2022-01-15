import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

// import Results from "../Results/Results";
import { createSession } from "../../Backend/API";
import Results from "../Results";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(false);
  const [titleData, setTitleData] = useState([]);
  const navigate = useNavigate();

  const searchValue = (e) => {
    setSearch(e.currentTarget.value);
    // console.log(search);
  };

  const redirectNow = () => {
    navigate(`/search/${search}`);
    setBool(true);
  };

  const grabTitleData = async () => {
    const data = await createSession(search);
    setTitleData(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search && bool) {
        grabTitleData();
        setBool(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [bool]);

  return (
    <div>
      <Wrapper>
        <form
          onSubmit={(e) => {
            redirectNow();
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search for a title.."
            onChange={(e) => searchValue(e)}
          />
        </form>
      </Wrapper>
      <Results search={search} titleData={titleData} />
    </div>
  );
};

export default Search;
