import React from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
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
export default function App() {
  return (
      <Router forceRefresh>
        <div>
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users/:username" component={User}/>
            <Route exact path="/search/:searchValue" component={Search}/>
            <Route exact path="/photo/:photoID" component={Photo}/>
            <Route exact path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
  );
}

