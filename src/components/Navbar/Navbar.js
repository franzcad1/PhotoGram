import styled from "styled-components";

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  align-content: center;
`;
const Navbar = (props) => (
  <Navigation>
    <input type="text" onChange={props.handleChange} />
    <input type="button" value="photos" />
    <input type="button" value="favorites" />
    <input type="button" value="theme" />
  </Navigation>
);

export default Navbar;
