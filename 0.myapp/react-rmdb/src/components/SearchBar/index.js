import React, { useState, useEffect, useRef } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const inital = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inital.current) {
        inital.current = false;
        return;
      }
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }),
    [setSearchTerm, state];

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        ></input>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
