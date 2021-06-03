import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/main.scss';
import { CardEdit } from './cmps/CardEdit';
import { CardDetails } from './pages/CardDetails';
import { CardList } from './pages/CardList';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SavedCardList } from './pages/SavedCardList';
import { signup } from './store/actions/userActions';

export function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/card/edit/:id" component={CardEdit} />
          <Route path="/card/edit" component={CardEdit} />
          <Route path="/card/saved" component={SavedCardList} />
          <Route path="/card/:id" component={CardDetails} />
          <Route path="/card" component={CardList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

