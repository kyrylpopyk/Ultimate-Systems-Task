import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AuthRouter from './Auth/AuthRouter';
import BoardRouter from './Board/BoardRouter';

function App() {
  return (
    <Router>
          <Switch>
              <Route path="/auth" component={AuthRouter} />
              <Route path="/board" component={BoardRouter}/>
          </Switch>
    </Router>
  );
}

export default App;
