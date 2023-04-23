import styled from 'styled-components';
import {HeartFill, Star, StarFill} from '@styled-icons/bootstrap';

export const DisplayPicture = styled.img`
  border-radius: 15px;
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: ${props => props.theme.background};
  height: 100vh
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px;
    cursor: pointer;
    color: ${props => props.theme.main};
`;

export const StyledImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

export const PhotoInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    max-width: 300px;
`;

export const HeartIcon = styled(HeartFill)`
    color: red;
    width: 40px;
`;

export const StarIcon = styled(Star)`
    color: #FFCF36;
    width: 40px;
    cursor: pointer;
`;

export const StarFillIcon = styled(StarFill)`
    color: #FFCF36;
    width: 40px;
    cursor: pointer;
`;

export const LikesInfo = styled.div`
    display: flex;
    gap: 10px;
    font-size: 24px;
    color: ${props => props.theme.main};
`;