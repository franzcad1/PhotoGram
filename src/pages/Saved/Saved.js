import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {withRouter} from 'react-router-dom'
import {MainContainer, Heading, StyledImage} from './saved.styles'
class Saved extends React.Component {
  handlePhotoClick = (photo) => {
    this.props.history.push(`/photo/${photo.id}`);
  }
    render() {
      return (
      <MainContainer>
        <Heading>Saved Photos</Heading>
        <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {this.props.savedPhotos &&
                  this.props.savedPhotos.map((value, index) => {
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
        </MainContainer>
    )}
  }

  export default withRouter(Saved);