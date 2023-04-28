import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  MainContainer,
  DisplayPicture,
  Heading,
  BioContainer,
  UserURL,
  UserInfoContainer,
  UserInfo,
  StyledImage,
} from "./user.styles";
import { getUser, getUserPhotos } from "../../store/user/userActions";

class User extends React.Component {
  state = {
    page: 1,
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.getUserPhotos(this.props.match.params.username, this.state.page);
    }
  }

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
    if (this.state.page === 1) {
      this.props.getUserPhotos(this.props.match.params.username, this.state.page);
    }
  }

  handlePhotoClick = (photo) => {
    this.props.history.push(`/photo/${photo.id}`);
  };
  render() {
    return (
      <MainContainer>
        {this.props.userState.user && (
          <>
            <DisplayPicture src={this.props.userState.user.profile_image.large} />
            <Heading>{this.props.userState.user.name}</Heading>
            <BioContainer>
              <p>{this.props.userState.user.bio}</p>
            </BioContainer>
            {this.props.userState.user.instagram_username && (
              <UserURL
                href={`https://www.instagram.com/${this.props.userState.user.instagram_username}/`}
              >
                @{this.props.userState.user.instagram_username}
              </UserURL>
            )}
            <UserInfoContainer>
              <UserInfo>
                <h2>{this.props.userState.user.total_photos}</h2>
                <p>Posts</p>
              </UserInfo>
              <UserInfo>
                <h2>{this.props.userState.user.followers_count}</h2>
                <p>Followers</p>
              </UserInfo>
              <UserInfo>
                <h2>{this.props.userState.user.following_count}</h2>
                <p>Following</p>
              </UserInfo>
            </UserInfoContainer>
            <InfiniteScroll
              key={this.props.userState.pictures.id}
              dataLength={this.props.userState.pictures.length}
              next={this.increasePage}
              hasMore={this.props.userState.hasMore}
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry>
                  {this.props.userState.pictures &&
                    this.props.userState.pictures.map((value, index) => {
                      return (
                        <StyledImage
                          onClick={() => this.handlePhotoClick(value)}
                          key={value.id}
                          src={value.urls.small}
                          alt={value.alt_description}
                        />
                      );
                    })}
                </Masonry>
              </ResponsiveMasonry>
            </InfiniteScroll>
          </>
        )}
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user,
});

const mapDispatchToProps = {
  getUser, getUserPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
