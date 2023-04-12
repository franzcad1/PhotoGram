import axios from "axios";
import React from "react";
import {withRouter} from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



class Home extends React.Component {
  state = {
    hasError: false,
    isLoading: false,
    page: 1,
    hasMore: true,
    pictures: []
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
    this.state.pictures.map((value) => {
      if (value.id === photo.id){
        console.log(value.alt_description);
      }
      return value;
    })
  }

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };


  render() {
    return (
      <div>
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
                    <img
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
      </div>
    );
  }
}

export default withRouter(Home);
