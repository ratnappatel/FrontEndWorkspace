
import './App.css';
import LoggedStatus from './Components.js/InlineIf/LoggedStatus';
//import SwitchDemo from './Components.js/SwitchDemo';
//import TernaryDemo from './Components.js/TernaryDemo';
//import LoginPage from './Components.js/LoginPage';

function App() {
  return (
    <div>
      {/* <LoginPage/> 
      <TernaryDemo/>
      <SwitchDemo/>*/}
      <LoggedStatus isLoggedIn={false}/>
    </div>
  );
}

export default App;
