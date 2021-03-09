import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <Switch>
            <Route path='/' />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
