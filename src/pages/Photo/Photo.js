import React from 'react';
import axios from 'axios';
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
    cursor: pointer;
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
    state = {
        isLoading: false,
        hasError: false,
        photo: null
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
          console.log(data)
        } catch (err) {
          this.setState({ isLoading: false, hasError: true });
        }
      };

      componentDidMount(){
        this.getPhoto();
      };

      handleUserClick = (username) => {
        this.props.history.push(`/users/${username}`);
    }
    render() {
      return <>
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
        <StarIcon/>
      </PhotoInfo>
      </>}
      </>;
    }
  }

  export default Photo;