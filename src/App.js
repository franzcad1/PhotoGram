import React from "react";
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import User from './pages/User/User'
import ImagePreview from "./components/ImagePreview/ImagePreview";


export default function App() {
  return (
    <Router forceRefresh>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/users/:username" component={User}/>
          <Route exact path="/search/:searchValue" component={Search}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

