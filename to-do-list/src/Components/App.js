import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AuthRouter from './Auth/AuthRouter';
import BoardRouter from './Board/BoardRouter';
import AppContainer from './Library/AppContainer.style';

function App() {
  return (
    <AppContainer backgroundColor="#1A1A1A">
      <Router>
        <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route path="/board" component={BoardRouter}/>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
