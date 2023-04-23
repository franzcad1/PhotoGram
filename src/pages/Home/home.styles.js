import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  filter: ${props => props.isOpened ? 'blur(4px)' : 'blur(0px)'};
`;

export const StyledImage = styled.img`
  border-radius 15px;
  margin: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;