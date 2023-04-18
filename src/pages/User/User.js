import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UserInfo = styled.div`
  margin: 20px 20px;
  justify-content: center;
  line-height:10px;
`;

const DisplayPicture = styled.img`
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const UserURL = styled.a`
  color: gray;
  text-decoration: none;
`;


class User extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    user: null,
    pictures: []
  };
  getUser = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `${baseURL}/users/${this.props.match.params.username}/?client_id=${accessKey}`
      );
      this.setState({
        isLoading: false,
        user: data
      });
      console.log(data);
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

    componentDidMount(){
      this.getUser();
    }

    render() {
      return (
      <MainContainer>
        {this.state.user && <>
          <DisplayPicture src={this.state.user.profile_image.large}/>
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.bio}</p>
          {this.state.user.instagram_username &&  <UserURL href={`https://www.instagram.com/${this.state.user.instagram_username}/`}>
            @{this.state.user.instagram_username}
            </UserURL> }
          <UserInfoContainer>
            <UserInfo>
              <h2>{this.state.user.total_photos}</h2>
              <p>Posts</p>
            </UserInfo>
            <UserInfo>
              <h2>{this.state.user.followers_count}</h2>
              <p>Followers</p>
            </UserInfo>
            <UserInfo>
              <h2>{this.state.user.following_count}</h2>
              <p>Following</p>
            </UserInfo>
          </UserInfoContainer>
        </>}
      </MainContainer>
      );
    }
  }

export default User;