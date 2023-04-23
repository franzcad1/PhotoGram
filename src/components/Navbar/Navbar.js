import styled from "styled-components";
import React from 'react'
import { withRouter, Link } from "react-router-dom";
import {Camera, Star, MoonStars} from '@styled-icons/bootstrap'

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  max-width: 850px;
  background-color: ${props => props.theme.background};
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 20px 15px;
  align-items: center;
`;

const IconContainer = styled.div`
  align-items: center;
  text-align: center;
  color: ${props => props.theme.main};
  border-radius: 15px;
  margin: 5px;
  width: 60px;
  height: 70px;
  padding: 15px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

const SearchBar = styled.input`
  height: 50px;
  width: 400px;
  border: 0px;
  font-size: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  background-color:  ${props => props.theme.inputBackground};
`;

const StyledCamera = styled(Camera)`
  color:blue;
  height: 40px;
`;

const StyledStar = styled(Star)`
  color: #FFCF36;
  height: 40px;
`;

const StyledMoon = styled(MoonStars)`
  height: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class Navbar extends React.Component{
  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.searchValue}`);
    this.setState({ searchValue: '' });
  };
  render(){
    return(
        <>
        <Navigation>
        <form onSubmit={this.handleSubmit}>
        <SearchBar type="text" onChange={this.handleChange} placeholder={"Search..."}  />
        </form>
        <Icons>
          <StyledLink to='/'>
            <IconContainer>
              <StyledCamera/>
              <p>Photos</p>
            </IconContainer>
          </StyledLink>
          <StyledLink to='/saved'>
          <IconContainer>
            <StyledStar/>
            <p>Saved</p>
          </IconContainer>
          </StyledLink>
          <IconContainer onClick={this.props.handleThemeChange}>
            <StyledMoon/>
            <p>Theme</p>
          </IconContainer>
        </Icons>
      </Navigation>
      </>
    )
  }
}

export default withRouter(Navbar);
