
import './App.css';
import StudentAcademicDetails from './Components/StudentAcademicDetails';
import StudentPersonalDetails from './Components/StudentPersonalDetails';
//import ChildComponent from './Components/ChildComponent';


function App() {
  return (
    <div>
     {/* <ChildComponent></ChildComponent> */}
     <StudentAcademicDetails></StudentAcademicDetails>
     <hr></hr>
     <StudentPersonalDetails></StudentPersonalDetails>
    </div>
  );
}

export default App;
