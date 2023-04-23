import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Landing} from './Pages/Landing/Landing';
import {Home} from './Pages/Home/Home';
import {Create} from './Pages/Create/Create';
import {Details} from './Pages/Details/Details';
import {Contact} from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path = '/' component = {Landing}/>
          <Route path = '/home' component = {Home}/>
          <Route path = '/create/:id' component = {Create}/>
          <Route path = '/create' component = {Create}/>
          <Route path = '/contact' component = {Contact}/>
          <Route path = '/details/:id' component = {Details}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
