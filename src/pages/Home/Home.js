import axios from "axios";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



class Home extends React.Component {
  state = {
    searchValue: "",
    hasError: false,
    isLoading: false,
    page: 1,
    hasMore: true,
    pictures: []
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
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

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const images = [...this.state.pictures];
    if (this.state.pictures) {
      this.state.pictures.map((item) =>
        images.push({
          src: item.urls.small,
          width: item.width,
          height: item.height
        })
      );
    }
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

export default Home;
