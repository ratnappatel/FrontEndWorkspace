
import './App.css';
import PersonDetails from './Components/ContextDemoComp/PersonDetails';
import DisplayProducts from './Components/DisplayProducts';
import EmailComponent from './Components/EmailComponent';

function App() {
  return (
    <div >
       <EmailComponent/>
       <hr></hr>
       <DisplayProducts/>
       <hr></hr>
       <PersonDetails/>
    </div>
  );
}

export default App;
