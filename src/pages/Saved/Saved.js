import React from 'react';
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
class Saved extends React.Component {
    render() {
      return (
      <MainContainer>
        <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {this.props.savedPhotos &&
                  this.props.savedPhotos.map((value, index) => {
                    return (
                      <StyledImage
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

  export default Saved;