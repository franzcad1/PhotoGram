import React from "react";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import User from './pages/User/User'
import Saved from "./pages/Saved/Saved";
import Photo from "./pages/Photo/Photo";


const GlobalStyle = createGlobalStyle`
  body, input {
    font-family: 'Nunito', sans-serif;
  }
`;

const lightTheme = {
  main: '#000000',
  secondary: '#808080',
  background: '#FFFFFF',
  inputBackground: '#FFFFFF'
};

const darkTheme = {
  main: '#FFFFFF',
  secondary: '#F6F1E9',
  background: '#252526',
  inputBackground: '#252626'
};

const MainContainer = styled.div`
  background-color: ${props => props.theme.background};
`;

export default class App extends React.Component {
  state = {
    isDarkTheme: !!JSON.parse(localStorage.getItem('theme')),
    savedPhotos: JSON.parse(localStorage.getItem('savedPhotos') || '[]')
  }

  handleThemeChange = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
    localStorage.setItem('theme', !this.state.isDarkTheme)
  };

  savePhoto = (photo) => {
      const photoList = [...this.state.savedPhotos];
      if (!this.state.savedPhotos.find(item => item.id === photo.id)){
        photoList.push(photo);
        console.log('image saved')
      }
      this.setState({savedPhotos: photoList})
      localStorage.setItem('savedPhotos', JSON.stringify(photoList));
    };

  unsavePhoto = (photo) => {
    const photoList = this.state.savedPhotos.filter(item => {return item.id !== photo.id});
    this.setState({savedPhotos: photoList})
    localStorage.setItem('savedPhotos', JSON.stringify(photoList));
  }
  
  
  componentDidUpdate(prevProps, prevState){
    if (prevState.savedPhotos !== this.state.savedPhotos){
      console.log(this.state.savedPhotos);
    }
  }
  render() {
    return (
      <ThemeProvider theme={this.state.isDarkTheme ? darkTheme : lightTheme }>
        <Router forceRefresh>
          <MainContainer>
            <GlobalStyle/>
            <Navbar handleThemeChange={this.handleThemeChange}/>
            <Switch>
              <Route exact path="/" component={(props) => <Home {...props} savePhoto={this.savePhoto} savedPhotos={this.state.savedPhotos} unsavePhoto={this.unsavePhoto}/>}/>
              <Route exact path="/users/:username" component={User}/>
              <Route exact path="/search/:searchValue" component={Search}/>
              <Route exact path="/photo/:photoID" component={(props) => <Photo {...props} savePhoto={this.savePhoto} savedPhotos={this.state.savedPhotos} unsavePhoto={this.unsavePhoto}/>}/>
              <Route exact path="/saved" component={(props) => <Saved {...props} savedPhotos={this.state.savedPhotos}/>}/>
            </Switch>
          </MainContainer>
        </Router>
      </ThemeProvider>
  );
  }
};

