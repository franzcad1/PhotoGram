import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { MainContainer, PreviewContainer, Header, UserInfo, Icon, Username, CloseButton, Image, PhotoInfo, Likes, HeartIcon, StarFillIcon, StyledStar } from './imagepreview.styles'
class ImagePreview extends Component {
    state = {
        isSaved: false
    }
    handleUserClick = (username) => {
        this.props.history.push(`/users/${username}`);
    }

    handlePhotoClick = (photo) => {
        this.props.history.push(`/photo/${photo.id}`);
    }

    checkIfSaved = () => {
        if (this.props.openPhoto){
          const isSaved = this.props.savedPhotos.find((value) => value.id === this.props.openPhoto.id);
          if (isSaved){
            this.setState({isSaved: true});
          } else{
            this.setState({isSaved: false});
          }
        }
      }

    componentDidMount(){
        this.checkIfSaved();
    }
    
  render() {
    return (
        <MainContainer>
            <PreviewContainer>
                <Header>
                    <UserInfo onClick={() => this.handleUserClick(this.props.openPhoto.user.username)}>
                        <Icon src={this.props.openPhoto.user.profile_image.medium}/>
                        <Username>{this.props.openPhoto.user.username}</Username>
                    </UserInfo>
                    <CloseButton onClick={this.props.handleClose}  />
                </Header>
                <Image onClick={()=> this.handlePhotoClick(this.props.openPhoto)} src={this.props.openPhoto.urls.regular}/>
                <PhotoInfo>
                    <Likes>  
                        <HeartIcon/>
                        <p>{this.props.openPhoto.likes}</p>
                    </Likes>
                    {this.state.isSaved ? <StarFillIcon onClick={() => this.props.unsavePhoto(this.props.openPhoto)}/> :<StyledStar onClick={() => this.props.savePhoto(this.props.openPhoto)}/>}
                </PhotoInfo>
            </PreviewContainer>
        </MainContainer>
    )
  }
}

export default withRouter(ImagePreview);

