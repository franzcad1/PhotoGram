import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserInfo = styled.div`
  margin: 20px 20px;
  justify-content: center;
  line-height:10px;
  color: ${props => props.theme.secondary};
`;

export const DisplayPicture = styled.img`
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const UserURL = styled.a`
  color: gray;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  border-radius 15px;
  margin: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

export const BioContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  color: ${props => props.theme.secondary};
`;

export const Heading = styled.h1`
  color: ${props => props.theme.main};
`;

