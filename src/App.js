import React from "react";
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import ImagePreview from "./components/ImagePreview/ImagePreview";


export default function App() {
  return (
    <Router forceRefresh>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/users" component={ImagePreview}/>
          <Route exact path="/search/:searchValue" component={Search}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

