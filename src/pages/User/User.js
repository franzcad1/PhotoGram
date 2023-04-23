import React from 'react';
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MainContainer, DisplayPicture, Heading, BioContainer, UserURL, UserInfoContainer, UserInfo, StyledImage } from './user.styles';

class User extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    user: null,
    pictures: [],
    page: 1,
    hasMore: true
  };
  getUser = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${baseURL}/users/${this.props.match.params.username}/?client_id=${accessKey}`
      );
      this.setState({
        isLoading: false,
        user: data,
        pictures: [...this.state.pictures, ...data.photos]
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  
  getUserPhotos = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${baseURL}/users/${this.props.match.params.username}/photos?page=${this.state.page}&per_page=12&client_id=${accessKey}`
      );
      this.setState({
        isLoading: false,
        pictures: [...this.state.pictures, ...data]
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  componentDidUpdate(prevProps, prevState){
    if (prevState.page !== this.state.page){
      this.getUserPhotos();
    }
  }

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  componentDidMount(){
    this.getUser();
    if (this.state.page === 1){
      this.getUserPhotos();
    }
  }

  handlePhotoClick = (photo) => {
    this.props.history.push(`/photo/${photo.id}`);
  }
    render() {
      return (
      <MainContainer>
        {this.state.user && <>
          <DisplayPicture  src={this.state.user.profile_image.large}/>
          <Heading>{this.state.user.name}</Heading>
          <BioContainer>
            <p>{this.state.user.bio}</p>
          </BioContainer>
          {this.state.user.instagram_username &&  <UserURL href={`https://www.instagram.com/${this.state.user.instagram_username}/`}>
            @{this.state.user.instagram_username}
            </UserURL> }
          <UserInfoContainer>
            <UserInfo>
              <h2>{this.state.user.total_photos}</h2>
              <p>Posts</p>
            </UserInfo>
            <UserInfo>
              <h2>{this.state.user.followers_count}</h2>
              <p>Followers</p>
            </UserInfo>
            <UserInfo>
              <h2>{this.state.user.following_count}</h2>
              <p>Following</p>
            </UserInfo>
          </UserInfoContainer>
          <InfiniteScroll
            key={this.state.pictures.id}
            dataLength={this.state.pictures.length}
            next={this.increasePage}
            hasMore={this.state.hasMore}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {this.state.pictures &&
                  this.state.pictures.map((value, index) => {
                    return (
                      <StyledImage onClick={() => this.handlePhotoClick(value)}
                        key={value.id}
                        src={value.urls.small}
                        alt={value.alt_description}
                      />
                    );
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </InfiniteScroll>
        </>}
      </MainContainer>
      );
    }
  }

export default User;