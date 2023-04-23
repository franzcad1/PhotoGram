import styled from 'styled-components';

export const StyledImage = styled.img`
  border-radius 15px;
  margin: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.main};
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;
