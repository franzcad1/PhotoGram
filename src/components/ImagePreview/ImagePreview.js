import React, { Component } from 'react'
import styled from 'styled-components';
import {CgClose} from 'react-icons/cg'
import {MdFavoriteBorder, MdOutlineStarBorder} from 'react-icons/md'

const PreviewContainer = styled.div`   
    width: 60%;
    margin: auto;
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: white;
`;

const Header = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: space-between;
    height: 60px;
`;

const UserInfo = styled.div`
    display: flex;
`;

const Username = styled.h1`
    font-size: 15px;
    margin: 20px
`;

const Icon = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 15px;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 15px;
    margin-top: 10px;
`;

const PhotoInfo = styled.div`
    display: flex;
    height: 40px;
    margin: 15px 30px;
    justify-content: space-between;
    align-items: center
`;


const Likes = styled.div`
    display: flex;
    justify-content: space-between;
    color: red;
    align-items: center;
    font-weight: normal;
    font-size: 25px;
    gap: 10px;
`;

const MainContainer = styled.div`
    position: relative;
`;


class ImagePreview extends Component {
  render() {
    return (
        <MainContainer>
        <PreviewContainer>
            <Header>
                <UserInfo>
                    <Icon src="https://images.unsplash.com/profile-1598022349778-ee6869101631image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64"/>
                    <Username>Mark Peter</Username>
                </UserInfo>
                <CgClose  color="red" size={40} />
            </Header>
            <Image src='https://images.unsplash.com/photo-1661956602868-6ae368943878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjUyNzB8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4MTMyNDg2Nw&ixlib=rb-4.0.3&q=80&w=1080'/>
            <PhotoInfo>
                <Likes>  
                    <MdFavoriteBorder size={35}/>
                    <p>700</p>
                </Likes>
                <MdOutlineStarBorder color="yellow" size={40}/>
            </PhotoInfo>
        </PreviewContainer>
        </MainContainer>
    )
  }
}

export default ImagePreview;

