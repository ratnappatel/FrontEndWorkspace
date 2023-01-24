import './App.css';
import EmployeeList from './Components/EmployeeList';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import DeleteEmployee from './Components/DeleteEmployee';



function App() {
  return (
          <Router>
              <Routes>
                <Route path="/" element={<EmployeeList/>} exact/>
                <Route path="/add" element={<AddEmployee/>}exact />
                <Route path="/edit/:id" element={<EditEmployee/>} exact/>
                <Route path="/delete/:id" element={<DeleteEmployee/>} exact/>
              </Routes>
          </Router>
      );
}

export default App;
