import React from 'react';
import styled from 'styled-components';
import {HeartFill, Star} from '@styled-icons/bootstrap';

const DisplayPicture = styled.img`
  border-radius: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px;
`;

const StyledImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

const PhotoInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    max-width: 300px;
`;

const HeartIcon = styled(HeartFill)`
    color: red;
    width: 40px;
`;

const StarIcon = styled(Star)`
    color: #FFCF36;
    width: 40px;
`;

const LikesInfo = styled.div`
    display: flex;
    gap: 10px;
    font-size: 24px;
`;


class Photo extends React.Component {
    render() {
      return <>
      <UserInfo>
        <DisplayPicture src ='https://images.unsplash.com/profile-1615576234943-19e4d4495feeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64'/>
        <h3>Franz Cadiente</h3>
      </UserInfo>
      <StyledImage src='https://images.unsplash.com/photo-1681896616404-6568bf13b022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjUyNzB8MHwxfGFsbHx8fHx8fHx8fDE2ODE5MzMzNDQ&ixlib=rb-4.0.3&q=80&w=1080'/>
      <PhotoInfo>
        <LikesInfo>
            <HeartIcon/>
            <p>23</p>
        </LikesInfo>
        <StarIcon/>
      </PhotoInfo>
      </>;
    }
  }

  export default Photo;