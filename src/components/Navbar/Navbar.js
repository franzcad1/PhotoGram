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
  border-radius: 15px;
  margin: 5px;
  width: 60px;
  height: 70px;
  padding: 15px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

const SearchBar = styled.input`
  height: 40px;
  width: 300px;
  border: 0px;
  font-size: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
`;

const StyledCamera = styled(Camera)`
  color:blue;
  height: 40px;
`;

const StyledStar = styled(Star)`
  color:yellow;
  height: 40px;
`;

const StyledMoon = styled(MoonStars)`
  height: 40px;
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
          <Link to='/'>
            <IconContainer>
              <StyledCamera/>
              <p>Photos</p>
            </IconContainer>
          </Link>
          <IconContainer>
            <StyledStar/>
            <p>Saved</p>
          </IconContainer>
          <IconContainer>
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
