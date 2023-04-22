import React from 'react';
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {withRouter} from 'react-router-dom'

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: ${props => props.theme.background};
  height: 100vw
`;

const StyledImage = styled.img`
  border-radius 15px;
  margin: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.02);
  cursor: pointer;
`;

const Heading = styled.h1`
  color: ${props => props.theme.main};
  margin: 20px;
`;
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