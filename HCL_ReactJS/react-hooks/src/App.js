
import './App.css';
import PersonDetails from './Components/ContextDemoComp/PersonDetails';
import DisplayProducts from './Components/DisplayProducts';
import EmailComponent from './Components/EmailComponent';
import UseMemoCallback from './Components/UseMemoCallback';

import UseRefComp from './Components/UseRefComp';
import UserReducerComp from './Components/UserReducerComp';

function App() {
  return (
    <div >
      <UseMemoCallback/>
      <hr></hr>
      <UserReducerComp/>
      <hr></hr>
       <EmailComponent/>
       <hr></hr>
       <DisplayProducts/>
       <hr></hr>
       <PersonDetails/>
       <hr height="5px"></hr>
       <UseRefComp/>
    </div>
  );
}

export default App;
