import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom'
import { MainContainer, PreviewContainer, Header, UserInfo, Icon, Username, CloseButton, Image, PhotoInfo, Likes, HeartIcon, StarFillIcon, StyledStar } from './imagepreview.styles'

const ImagePreview = (props) => {
    const [saved, setSaved] = useState(false);

  const handleUserClick = (username) => {
    props.history.push(`/users/${username}`);
  }

  const handlePhotoClick = (photo) => {
    props.history.push(`/photo/${photo.id}`);
  }

  const checkIfSaved = () => {
    if (props.openPhoto){
      const isSaved = props.savedPhotos.find((value) => value.id === props.openPhoto.id);
      if (isSaved){
        setSaved(true);
      } else{
        setSaved(false);
      }
    }
  }

  useEffect(() => {
    checkIfSaved();
  }, []);

  return (
    <MainContainer>
        <PreviewContainer>
            <Header>
                <UserInfo onClick={() => handleUserClick(props.openPhoto.user.username)}>
                    <Icon src={props.openPhoto.user.profile_image.medium}/>
                    <Username>{props.openPhoto.user.username}</Username>
                </UserInfo>
                <CloseButton onClick={props.handleClose}  />
            </Header>
            <Image onClick={()=> handlePhotoClick(props.openPhoto)} src={props.openPhoto.urls.regular}/>
            <PhotoInfo>
                <Likes>  
                    <HeartIcon/>
                    <p>{props.openPhoto.likes}</p>
                </Likes>
                {saved ? <StarFillIcon onClick={() => props.unsavePhoto(props.openPhoto)}/> :<StyledStar onClick={() => props.savePhoto(props.openPhoto)}/>}
            </PhotoInfo>
        </PreviewContainer>
    </MainContainer>
  )
}

export default withRouter(ImagePreview);

