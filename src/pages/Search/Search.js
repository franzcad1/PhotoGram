import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MainContainer, Heading, StyledImage } from "./search.styles";
import { searchPhotos } from "../../store/search/searchActions";
class Search extends React.Component {
  state = {
    page: 1,
  };

  handlePhotoClick = (photo) => {
    this.props.history.push(`/photo/${photo.id}`);
  };

  componentDidMount() {
    this.props.searchPhotos(this.props.match.params.searchValue, this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.searchPhotos(this.props.match.params.searchValue, this.state.page);
    }
  }

  increasePage = () => {
    this.setState({page: this.state.page + 1})
  }

  render() {
    return (
      <MainContainer>
        <Heading>
          Search results for <span> {this.props.match.params.searchValue}</span>
        </Heading>
        <InfiniteScroll
          dataLength={this.props.search.pictures.length}
          next={this.increasePage}
          hasMore={this.props.search.hasMore}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {this.props.search.pictures &&
                this.props.search.pictures.map((value, index) => {
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
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = {
  searchPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
