
import './App.css';
import DisplayBeverages from './DispBeverages';

function App() {
  const drinks =[
      {
        "id": 11,
        "Title": "Cold Coffee",
        "price": 35.99
      },
      {
        "id": 12,
        "Title": "Lemon Tea",
        "price": 35.99
      },
      {
        "id": 13,
        "Title": "Honey Ginger Tea",
        "price": 35.99
      }
  ];
  return (
    <div>
        <h3>Cold Beverages</h3>
        <DisplayBeverages drinks={drinks}/>
    </div>
  );
}

export default App;
