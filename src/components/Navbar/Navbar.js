import styled from "styled-components";
import React from 'react'
import { withRouter } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  align-content: center;
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
        <Navigation>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}  />
        </form>
        <input type="button" value="photos" />
        <input type="button" value="favorites" />
        <input type="button" value="theme" />
      </Navigation>
    )
  }
}


export default withRouter(Navbar);
