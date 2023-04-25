import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import {
  Navigation,
  SearchBar,
  Icons,
  StyledLink,
  IconContainer,
  StyledStar,
  StyledMoon,
  StyledCamera,
} from "./navbar.styles";

const Navbar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/search/${searchValue}`);
    setSearchValue('');
  };
  return (
    <>
      <Navigation>
        <form onSubmit={handleSubmit}>
          <SearchBar
            type="text"
            onChange={handleChange}
            placeholder={"Search..."}
          />
        </form>
        <Icons>
          <StyledLink to="/">
            <IconContainer>
              <StyledCamera />
              <p>Photos</p>
            </IconContainer>
          </StyledLink>
          <StyledLink to="/saved">
            <IconContainer>
              <StyledStar />
              <p>Saved</p>
            </IconContainer>
          </StyledLink>
          <IconContainer onClick={props.handleThemeChange}>
            <StyledMoon />
            <p>Theme</p>
          </IconContainer>
        </Icons>
      </Navigation>
    </>
  );
}

export default withRouter(Navbar);
