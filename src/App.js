import './App.css';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
//PYTHON
import { Python } from './pages/Python';
import { Javascript } from './pages/Javascript';
// import { Projects } from './pages/Projects';
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
//JAVASCRIPT
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
import { JSArrays } from './pages/Javascript/JSArrays';
import { MakeElementsDissapear } from './pages/Javascript/MakeElementsDissapear';
import { AllenIverson } from './pages/Javascript/AllenIverson';
import { ShowHideColors } from './pages/Javascript/ShowHideColors';
//HTML
import { HTML } from './pages/HTML/HTML';
import { HTMLforms } from './pages/HTML/HTMLforms';
import { HTMLsubmitbutton } from './pages/HTML/HTMLsubmitbutton';
import { HTMLdropdown } from './pages/HTML/HTMLdropdown';
import { HTMLnumberbox } from './pages/HTML/HTMLnumberbox';
import { HTMLslider } from './pages/HTML/HTMLslider';
import { HTMLtextarea } from './pages/HTML/HTMLtextarea';
import { HTMLtables } from './pages/HTML/HTMLtables';
import { HTMLradiodial } from './pages/HTML/HTMLradiodial';
import { HTMLauthentication } from './pages/HTML/HTMLauthentication';
import { HTMLDaviesBurgerMenu } from './pages/HTML/HTMLDaviesBurgerMenu';
//CSS
import { CSS } from './pages/CSS/CSS';
//DJANGO
import { DJANGO } from './pages/Django/DJANGO';
import { DJsetup } from './pages/Django/DJsetup';
import { DJmvcbasics } from './pages/Django/DJmvcbasics';
import { DJclonerepo } from './pages/Django/DJclonerepo';
import { DJmodels } from './pages/Django/DJmodels';
import { DJorm } from './pages/Django/DJorm';
import { DJheroku } from './pages/Django/DJheroku';
import { DJauthenticate } from './pages/Django/DJauthenticate';
//FLASK
import { FLASK } from './pages/Flask/FLASK';
import { FLbasics } from './pages/Flask/FLbasics';
import { FLheroku } from './pages/Flask/FLheroku';
//GIT
import { GIT } from './pages/Git/GIT';
import { GITinit } from './pages/Git/GITinit';
import { GITignore } from './pages/Git/GITignore';
import { GITdeleterepo } from './pages/Git/GITdeleterepo';
import { GITpushheroku } from './pages/Git/GITpushheroku';
//GITHUB
import { GitHub } from './pages/GitHub/GitHub';
import { GHinitpush } from './pages/GitHub/GHinitpush';
//API
import { API } from './pages/API/API';
import { APIrest } from './pages/API/APIrest';
import { APIsoap } from './pages/API/APIsoap';
//REACT 
import { REACT } from './pages/React/REACT';
import { REstartapp } from './pages/React/REstartapp';
import { REconstruct } from './pages/React/REconstruct';
import { REbuttonmap } from './pages/React/REbuttonmap';
import { REauthenticate } from './pages/React/REauthenticate';
//TODOS
// import { ProjectsToDo } from './pages/ToDos/Projects';
import { ProjectsList } from './pages/ToDos/Projects/ProjectsList';
import DeliverablesList from './pages/ToDos/Deliverables/DeliverablesList';
import { PracticesList } from './pages/ToDos/Practices/PracticesList';
import { ClassesList } from './pages/ToDos/Classes/ClassesList';



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
            <Route path='/javascript/arrays' exact component={JSArrays} />
            <Route path='/javascript/dissapear' exact component={MakeElementsDissapear} />
            <Route path='/javascript/answer' exact component={AllenIverson} />
            <Route path='/javascript/showhide' exact component={ShowHideColors} />
            

            {/* HTML */}
            <Route path='/html' exact component={HTML} />
            <Route path='/html/forms' exact component={HTMLforms} />
            <Route path='/html/submit' exact component={HTMLsubmitbutton} />
            <Route path='/html/drop' exact component={HTMLdropdown} />
            <Route path='/html/numbox' exact component={HTMLnumberbox} />
            <Route path='/html/slider' exact component={HTMLslider} />
            <Route path='/html/textarea' exact component={HTMLtextarea} />
            <Route path='/html/tables' exact component={HTMLtables} />
            <Route path='/html/radio' exact component={HTMLradiodial} />
            <Route path='/html/authenticate' exact component={HTMLauthentication} />
            <Route path='/html/daves' exact component={HTMLDaviesBurgerMenu} />

            {/* CSS */}
            <Route path='/css' exact component={CSS}/>
            

            {/* Django */}
            <Route path='/django' exact component={DJANGO} />
            <Route path='/django/settingup' exact component={DJsetup}/>
            <Route path='/django/mvc' exact component={DJmvcbasics}/>
            <Route path='/django/clonerepo' exact component={DJclonerepo}/>
            <Route path='/django/models' exact component={DJmodels}/>
            <Route path='/django/orm' exact component={DJorm}/>
            <Route path='/django/heroku' exact component={DJheroku}/>
            <Route path='/django/auth' exact component={DJauthenticate} />

            {/* Flask */}
            <Route path='/flask' exact component={FLASK} />
            <Route path='/flask/basicflask' exact component={FLbasics} />
            <Route path='/flask/heroku' exact component={FLheroku} />

            {/* Git  */}
            <Route path='/git' exact component={GIT} />
            <Route path='/git/general' exact component={GITinit} />
            <Route path='/git/gitignore' exact component={GITignore} />
            <Route path='/git/deletegit' exact component={GITdeleterepo} />
            <Route path='/git/heroku' exact component={GITpushheroku} />

            {/* GitHub */}
            <Route path='/github' exact component={GitHub} />
            <Route path='/github/push' exact component={GHinitpush} />

            {/* API */}
            <Route path='/api' exact component={API} />
            <Route path='/api/rest' exact component={APIrest} />
            <Route path='/api/soap' exact component={APIsoap} />

            {/* React */}
            <Route path='/react' exact component={REACT} />
            <Route path='/react/start' exact component={REstartapp} />
            <Route path='/react/constructor' exact component={REconstruct} />
            <Route path='/react/buttonmapping' exact component={REbuttonmap} />
            <Route path='/react/jsauth' exact component={REauthenticate} />



            {/* TODOs */}
            {/* <Route path='/pages/projects' exact component={ProjectsToDo} /> */}
            <Route path='/pages/projects' exact component={ProjectsList} />
            <Route path='/pages/deliverables' exact component={DeliverablesList} />
            <Route path='/pages/practices' exact component={PracticesList} />
            <Route path='/pages/classes' exact component={ClassesList} />
            

          </Switch>
      </Router>
    </div>
  );
}

export default App;
