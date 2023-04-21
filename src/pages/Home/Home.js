import axios from "axios";
import React from "react";
import {withRouter} from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import styled from 'styled-components'

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  filter: ${props => props.isOpened ? 'blur(4px)' : 'blur(0px)'};
`;

const StyledImage = styled.img`
  border-radius 15px;
  margin: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

class Home extends React.Component {
  state = {
    hasError: false,
    isLoading: false,
    page: 1,
    hasMore: true,
    pictures: [],
    openPhoto: null,
    isOpened: false
  };


  getAllPhotos = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${baseURL}/photos?page=${this.state.page}&perpage=50&client_id=${accessKey}`
      );
      this.setState({
        isLoading: false,
        pictures: [...this.state.pictures, ...data]
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  componentDidMount() {
    this.getAllPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getAllPhotos();
    }
  }

  handleClick = (photo) => {
    if (!this.state.isOpened){
      this.state.pictures.map((value) => {
        if (value.id === photo.id){
          this.setState({openPhoto: value, isOpened: true})
        }
        return value;
      })
    }
  }

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleClose = () => {
    this.setState({isOpened: false});
  }


  render() {
    return (
      <>
        {this.state.isOpened && <ImagePreview openPhoto={this.state.openPhoto} isOpened={this.state.isOpened} handleClose={this.handleClose}/>}
        <MainContainer isOpened={this.state.isOpened}>
        <InfiniteScroll
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
      </>
    );
  }
}

export default withRouter(Home);
