
import './App.css';
import BasicForm from './forms/BasicForm';
import BasicUForm from './forms/BasicUForm';
//import BasicForm from './forms/BasicForm';
//import RegistrationForm from './forms/RegistrationForm';
//import SubscriptionForm from './forms/SubscriptionForm';
import MultipleCheckBox from './forms/MultipleCheckBox';

function App() {
  return (
    <div>
     {/*  <BasicForm/>
      <hr></hr>
      <RegistrationForm/> 
      <SubscriptionForm/>
       <MultipleCheckBox/>*/}
       <BasicUForm/>
       <hr></hr>
       <BasicForm/>
     
      
    </div>
  );
}

export default App;