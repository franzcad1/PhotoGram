import React from "react";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getAllPhotos } from "../../store/home/homeActions";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import { MainContainer, StyledImage } from "./home.styles";

class Home extends React.Component {
  state = {
    page: 1,
    openPhoto: null,
    isOpened: false,
  };


  componentDidMount() {
    if (this.state.page === 1) {
      this.props.getAllPhotos(this.state.page);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page > 1 && prevState.page !== this.state.page) {
      this.props.getAllPhotos(this.state.page);
    }
  }

  handleClick = (photo) => {
    if (!this.state.isOpened) {
      this.props.home.pictures.map((value) => {
        if (value.id === photo.id) {
          this.setState({ openPhoto: value, isOpened: true });
        }
        return value;
      });
    }
  };

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleClose = () => {
    this.setState({ isOpened: false });
  };

  render() {
    return (
      <div>
        {this.state.isOpened && (
          <ImagePreview
            openPhoto={this.state.openPhoto}
            isOpened={this.state.isOpened}
            handleClose={this.handleClose}
            savePhoto={this.props.savePhoto}
            savedPhotos={this.props.savedPhotos}
            unsavePhoto={this.props.unsavePhoto}
          />
        )}
        <MainContainer isOpened={this.state.isOpened}>
          <InfiniteScroll
            dataLength={this.props.home.pictures.length}
            next={this.increasePage}
            hasMore={this.props.home.hasMore}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {this.props.home.pictures &&
                  this.props.home.pictures.map((value, index) => {
                    return (
                      <StyledImage
                        onClick={() => this.handleClick(value)}
                        key={value.id}
                        src={value.urls.small}
                        alt={value.alt_description}
                      />
                    );
                  })}
              </Masonry>
            </ResponsiveMasonry>
          </InfiniteScroll>
        </MainContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapDispatchToProps = {
  getAllPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
