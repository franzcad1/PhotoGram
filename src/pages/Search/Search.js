import React from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

 class Search extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    pictures: [],
    hasMore: true,
    page: 1
  };
  searchPhoto = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${baseURL}/search/photos/?query=${this.props.match.params.searchValue}&page=${this.state.page}&perpage=30&client_id=${accessKey}`
      );
      console.log(data.results)
      this.setState({
        isLoading: false,
        pictures: [...this.state.pictures, ...data.results]
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  componentDidMount(){
    this.searchPhoto();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.page !== this.state.page){
      this.searchPhoto();
    }
  }

  increasePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div>
      <h1>Search results for <span> {this.props.match.params.searchValue}</span> </h1>
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
    )
  }
}


export default Search;