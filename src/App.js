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
import { SendingEmail } from './pages/Python/SendingEmail';
import { JSFunctions } from './pages/Javascript/JSFunctions';
import { JSFuncParam } from './pages/Javascript/JSFuncParam';
import { JSWithIdentifier } from './pages/Javascript/JSWithIdentifier';
import { JSArrowNotationfunc } from './pages/Javascript/JSArrowNotation';
import { JSFuncNotationMultiLine } from './pages/Javascript/JSFuncNotationMultiLine';
import { JSFuncDeclaration } from './pages/Javascript/JSFuncDeclaration';
import { JSBasics } from './pages/Javascript/JSBasics';
import { JSFizzbuzz } from './pages/Javascript/JSFizzbuzz';
import { ColorCodeRadio } from './pages/Javascript/ColorCodeRadio';
import { DisableFieldsCheckbox } from './pages/Javascript/DisableFieldsCheckbox';
import { Scopes } from './pages/Javascript/Scopes';
import { JSClasses } from './pages/Javascript/JSClasses';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <Switch>

            {/* HOME */}
            <Route path='/pages/home' exact component={Home} />

            {/* PYTHON */}
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
            <Route path='/python/autoemail' exact component={SendingEmail} />

            {/* JAVASCRIPT */}
            <Route path='/javascript' exact component={Javascript} />
            <Route path='/javascript/functions' exact component={JSFunctions} />
            <Route path='/javascript/functions/params' exact component={JSFuncParam} />
            <Route path='/javascript/functions/identifier' exact component={JSWithIdentifier} />
            <Route path='/javascript/functions/arrow' exact component={JSArrowNotationfunc} />
            <Route path='/javascript/functions/multiline' exact component={JSFuncNotationMultiLine} />
            <Route path='/javascript/functions/funcdeclaration' exact component={JSFuncDeclaration} />
            <Route path='/javascript/basics' exact component={JSBasics} />
            <Route path='/javascript/fizzbuzz' exact component={JSFizzbuzz} />
            <Route path='/javascript/colorcode' exact component={ColorCodeRadio} />
            <Route path='/javascript/dissablefields' exact component={DisableFieldsCheckbox} />
            <Route path='/javascript/scopes' exact component={Scopes} />
            <Route path='/javascript/classes' exact component={JSClasses} />



            <Route path='/pages/projects' exact component={Projects} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
