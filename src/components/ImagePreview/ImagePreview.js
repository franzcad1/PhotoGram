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
`;

const PhotoInfo = styled.div`
    display: flex;
    height: 40px;
    margin: 15px 30px;
    justify-content: space-between;
    align-items: center
    aspect-ratio: auto;
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
        <MainContainer key={this.props.openPhoto.id}>
        <PreviewContainer>
            <Header>
                <UserInfo>
                    <Icon src={this.props.openPhoto.user.profile_image.medium}/>
                    <Username>{this.props.openPhoto.user.username}</Username>
                </UserInfo>
                <CgClose onClick={this.props.handleClose} color="red" size={40} />
            </Header>
            <Image src={this.props.openPhoto.urls.regular}/>
            <PhotoInfo>
                <Likes>  
                    <MdFavoriteBorder size={35}/>
                    <p>{this.props.openPhoto.likes}</p>
                </Likes>
                <MdOutlineStarBorder color="yellow" size={40}/>
            </PhotoInfo>
        </PreviewContainer>
        </MainContainer>
    )
  }
}

export default ImagePreview;

