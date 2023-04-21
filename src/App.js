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
import { BlackTie } from "styled-icons/fa-brands";

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
  filter: ${props => props.previewOpened ? 'blur(4px)' : 'blur(0px)'};
  background-color: ${props => props.theme.background};
`;

export default class App extends React.Component {
  state = {
    isLightTheme: true,
    previewOpened: false
  }

  handleThemeChange = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  };

  handleBlur = () => {
    this.setState({previewOpened: !this.state.previewOpened})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.previewOpened !== this.state.previewOpened)
    {
      
    }
  }
  
  render() {
    return (
      <ThemeProvider theme={this.state.isLightTheme ? lightTheme : darkTheme }>
        <Router forceRefresh>
          <MainContainer>
            <GlobalStyle/>
            <Navbar handleThemeChange={this.handleThemeChange}/>
            <Switch>
              <Route exact path="/" component={(props) => <Home {...props} handleBlur={this.handleBlur} previewOpened={this.state.previewOpened}/>}/>
              <Route exact path="/users/:username" component={User}/>
              <Route exact path="/search/:searchValue" component={Search}/>
              <Route exact path="/photo/:photoID" component={Photo}/>
              <Route exact path="/saved" component={Saved}/>
            </Switch>
          </MainContainer>
        </Router>
      </ThemeProvider>
  );
  }
};

