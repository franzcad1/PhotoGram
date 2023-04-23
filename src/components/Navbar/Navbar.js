import React from 'react'
import { withRouter} from "react-router-dom";
import { Navigation, SearchBar, Icons, StyledLink, IconContainer, StyledStar, StyledMoon, StyledCamera } from './navbar.styles';
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
