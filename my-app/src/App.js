import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import PageTwo from "./pages/MyPageTwo/MyPageTwo";
import PageFree from "./pages/MyPageFree/PageFree";

import "./App.css";
import { Li } from './StyledRoute';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link style={{ textDecoration: 'none' }} to='/pagetwo'>
          <Li>PAGE _ One</Li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/pagefree'>
          <Li>PAGE _ Twoo</Li>
        </Link>
        <Switch>
          <Route path='/PageTwo' component={PageTwo} />
          <Route path={'/PageFree'} component={PageFree} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
