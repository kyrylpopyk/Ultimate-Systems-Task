import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AuthRouter from './Auth/AuthRouter';
import BoardRouter from './Board/BoardRouter';
import HeaderContainer from './Header/HeaderContainer';
import AppContainer from './Library/AppContainer.style';

function App() {
  return (
    <AppContainer>
      <Router>
        <HeaderContainer />
        <Switch>
        <Route exact path="/Ultimate-Systems-Task">
            <Redirect to="/auth"/>
          </Route>
          <Route exact path="/">
            <Redirect to="/board"/>
          </Route>
          <Route path="/auth" component={AuthRouter}/>
          <Route path="/board" component={BoardRouter}/>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
