import styled from "styled-components";
import { Link } from "react-router-dom";
import {Camera, Star, MoonStars} from '@styled-icons/bootstrap'

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  max-width: 850px;
  background-color: ${props => props.theme.background};
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 20px 15px;
  align-items: center;
`;

export const IconContainer = styled.div`
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

export const SearchBar = styled.input`
  height: 50px;
  width: 400px;
  border: 0px;
  font-size: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  background-color:  ${props => props.theme.inputBackground};
  color: ${props => props.theme.main};
`;

export const StyledCamera = styled(Camera)`
  color:blue;
  height: 40px;
`;

export const StyledStar = styled(Star)`
  color: #FFCF36;
  height: 40px;
`;

export const StyledMoon = styled(MoonStars)`
  height: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;