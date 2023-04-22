import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {HeartFill, Star, StarFill} from '@styled-icons/bootstrap';

const DisplayPicture = styled.img`
  border-radius: 15px;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: ${props => props.theme.background};
  height: 100vh
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px;
    cursor: pointer;
    color: ${props => props.theme.main};
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
    cursor: pointer;
`;

const StarFillIcon = styled(StarFill)`
    color: #FFCF36;
    width: 40px;
    cursor: pointer;
`;

const LikesInfo = styled.div`
    display: flex;
    gap: 10px;
    font-size: 24px;
    color: ${props => props.theme.main};
`;


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