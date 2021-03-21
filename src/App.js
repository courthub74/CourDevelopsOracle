import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Python } from './pages/Python';
import { Javascript } from './pages/Javascript';
import { Projects } from './pages/Projects';
import { PYFunctions } from './pages/PYFunctions';
import { SelfParameter } from './pages/Python/SelfParameter';
import { ForLoop } from './pages/Python/ForLoop';
import { WhileLoop } from './pages/Python/WhileLoop';
// import { Counter } from './pages/Python/Counter';
import { Classes } from './pages/Python/Classes';
import { ControlFlow } from './pages/Python/ControlFlow';
import { TryExcept } from './pages/Python/TryExcept';
import { Regex } from './pages/Python/Regex';
import { WebScraping } from './pages/Python/WebScraping';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <Switch>
            <Route path='/pages/Home' exact component={Home} />
            <Route path='/python' exact component={Python} />
            <Route path='/python/functions' exact component={PYFunctions} />
            <Route path='/python/for' exact component={ForLoop} />
            <Route path='/python/while' exact component={WhileLoop} />
            {/* <Route path='/python/counter' exact component={Counter} /> */}
            <Route path='/python/self' exact component={SelfParameter} />
            <Route path='/python/classes' exact component={Classes} />
            <Route path='/python/controlflow' exact component={ControlFlow} />
            <Route path='/python/tryex' exact component={TryExcept} />
            <Route path='/python/regex' exact component={Regex} />
            <Route path='/python/webscraping' exact component={WebScraping} />
            <Route path='/javascript' exact component={Javascript} />
            <Route path='/pages/projects' exact component={Projects} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
