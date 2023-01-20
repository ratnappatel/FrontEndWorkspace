
import './App.css';
import ParentComponent from './Components/ParentComponent';
import TwoWayDataBinding from './Components/TwoWayDataBinding';

function App() {
  return (
    <div>
      <h1>Title of Company</h1>
     <TwoWayDataBinding></TwoWayDataBinding>
     <hr></hr>
     <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
