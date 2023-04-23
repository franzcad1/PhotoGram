import React from 'react';
import axios from 'axios';
import {MainContainer, UserInfo, DisplayPicture, StyledImage, PhotoInfo, LikesInfo, HeartIcon, StarFillIcon, StarIcon} from './photo.styles'
class Photo extends React.Component {
    state = {
        isLoading: false,
        hasError: false,
        photo: null,
        isSaved: false
    }
    getPhoto = async () => {
        const baseURL = process.env.REACT_APP_BASE_URL;
        const accessKey = process.env.REACT_APP_ACCESS_KEY;
        try {
          this.setState({ isLoading: true });
          const { data } = await axios(
            `${baseURL}/photos/${this.props.match.params.photoID}?client_id=${accessKey}`
          );
          this.setState({
            isLoading: false,
            photo: data
          });
        } catch (err) {
          this.setState({ isLoading: false, hasError: true });
        }
      };

    componentDidMount(){
        this.getPhoto();
    };

    componentDidUpdate(prevProps, prevState){
      if(prevState.photo !== this.state.photo){
        this.checkIfSaved();
      }
      if(prevState.isSaved !== this.state.isSaved){
        console.log(this.state.isSaved)
      }
    }

    handleUserClick = (username) => {
        this.props.history.push(`/users/${username}`);
    }

    checkIfSaved = () => {
      if (this.state.photo){
        const isSaved = this.props.savedPhotos.find((value) => value.id === this.state.photo.id);
        if (isSaved){
          this.setState({isSaved: true});
        } else{
          this.setState({isSaved: false});
        }
      }
    }

    render() {
      return <MainContainer>
      {this.state.photo && <> 
        <UserInfo onClick={() => this.handleUserClick(this.state.photo.user.username)}>
        <DisplayPicture src={this.state.photo.user.profile_image.medium}/>
        <h3>{this.state.photo.user.name}</h3>
      </UserInfo>
      <StyledImage src={this.state.photo.urls.full}/>
      <PhotoInfo>
        <LikesInfo>
            <HeartIcon/>
            <p>{this.state.photo.likes}</p>
        </LikesInfo>
        {this.state.isSaved ? <StarFillIcon onClick={() => this.props.unsavePhoto(this.state.photo)}/> : <StarIcon onClick={() => this.props.savePhoto(this.state.photo)}/>}
      </PhotoInfo>
      </>}
      </MainContainer>;
    }
  }

  export default Photo;