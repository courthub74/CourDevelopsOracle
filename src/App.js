import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Python } from './pages/Python';
import { Javascript } from './pages/Javascript';
import { Projects } from './pages/Projects';
import { PYFunctions } from './pages/PYFunctions';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <Switch>
            <Route path='/pages/Home' exact component={Home} />
            <Route path='/python' exact component={Python} />
            <Route path='/python/functions' exact component={PYFunctions} />
            <Route path='/javascript' exact component={Javascript} />
            <Route path='/pages/projects' exact component={Projects} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
