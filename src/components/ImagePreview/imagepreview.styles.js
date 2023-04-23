import styled from 'styled-components';
import {CloseOutline} from '@styled-icons/evaicons-outline';
import {Star, HeartFill, StarFill} from '@styled-icons/bootstrap'

export const PreviewContainer = styled.div`   
    width: 100vw;
    margin: auto;
    padding: 15px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: ${props => props.theme.background};
    max-width: 900px;
`;

export const Header = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

export const UserInfo = styled.div`
    display: flex;
    cursor: pointer;
`;

export const Username = styled.h1`
    font-size: 15px;
    margin: 20px;
    color: ${props => props.theme.main};
`;

export const Icon = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 15px;
`;

export const Image = styled.img`
    border-radius: 5px;
    max-width: 852px;
    max-height: 600px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media (max-width: 1600px) {
        max-width: calc(852px - 225px);
        max-height: calc(813px - 225px - 130px);
    }
    @media (max-width: 700px) {
        max-width: calc(852px - 500px);
        max-height: calc(813px - 520px);
    }
    cursor: pointer;
`;

export const PhotoInfo = styled.div`
    display: flex;
    height: 40px;
    margin: 15px 30px;
    justify-content: space-between;
    align-items: center
    aspect-ratio: auto;
`;


export const Likes = styled.div`
    display: flex;
    justify-content: space-between;
    color: red;
    align-items: center;
    font-weight: normal;
    font-size: 25px;
    gap: 10px;
`;

export const MainContainer = styled.div`
    position: relative;
    max-width: 1200px;
    margin: auto;
`;

export const CloseButton = styled(CloseOutline)`
    color: red;
    width: 50px;
    cursor: pointer;
`;

export const StyledStar = styled(Star)`
  color: #FFCF36;
  height: 40px;
  cursor: pointer;
`;

export const HeartIcon = styled(HeartFill)`
    color: red;
    width: 40px;
`;

export const StarFillIcon = styled(StarFill)`
    color: #FFCF36;
    width: 40px;
    cursor: pointer;
`;
