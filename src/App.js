import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function Hats(param) { return <h1>Hats Page</h1> }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
