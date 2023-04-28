import React from "react";
import { connect } from "react-redux";
import { getPhoto } from "../../store/photo/photoActions";
import {
  MainContainer,
  UserInfo,
  DisplayPicture,
  StyledImage,
  PhotoInfo,
  LikesInfo,
  HeartIcon,
  StarFillIcon,
  StarIcon,
} from "./photo.styles";
class Photo extends React.Component {
  state = {
    isSaved: false,
  };

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoID);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.photoState.photo !== this.props.photoState.photo) {
      this.checkIfSaved();
    }
  }

  handleUserClick = (username) => {
    this.props.history.push(`/users/${username}`);
  };

  checkIfSaved = () => {
    if (this.props.photoState.photo) {
      const isSaved = this.props.savedPhotos.find(
        (value) => value.id === this.props.photoState.photo.id
      );
      if (isSaved) {
        this.setState({ isSaved: true });
      } else {
        this.setState({ isSaved: false });
      }
    }
  };

  render() {
    return (
      <MainContainer>
        {this.props.photoState.photo && (
          <>
            <UserInfo
              onClick={() =>
                this.handleUserClick(this.props.photoState.photo.user.username)
              }
            >
              <DisplayPicture
                src={this.props.photoState.photo.user.profile_image.medium}
              />
              <h3>{this.props.photoState.photo.user.name}</h3>
            </UserInfo>
            <StyledImage src={this.props.photoState.photo.urls.full} />
            <PhotoInfo>
              <LikesInfo>
                <HeartIcon />
                <p>{this.props.photoState.photo.likes}</p>
              </LikesInfo>
              {this.state.isSaved ? (
                <StarFillIcon
                  onClick={() =>
                    this.props.unsavePhoto(this.props.photoState.photo)
                  }
                />
              ) : (
                <StarIcon
                  onClick={() =>
                    this.props.savePhoto(this.props.photoState.photo)
                  }
                />
              )}
            </PhotoInfo>
          </>
        )}
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  photoState: state.photo,
});

const mapDispatchToProps = {
  getPhoto,
};
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
