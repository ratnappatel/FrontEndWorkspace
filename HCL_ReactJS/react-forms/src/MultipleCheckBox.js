import React, { Component } from 'react'

export default class MultipleCheckBox extends Component {
    constructor(props) {
        super(props);  
        this.state = {  
          categories: [  
            {id: 1, value: "Hindi"},  
            {id: 2, value: "Tamil"},  
            {id: 3, value: "Gujarati"},  
            {id: 4, value: "Marathi"}  
          ],  
          checkedItems: new Map()  
        };  
    }
    handleChange=(event)=> {  
        var isChecked = event.target.checked;  // either true OR false
        var item = event.target.value;  
           
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));  
  }  
       
  handleSubmit=(event)=> {  
    console.log(this.state.checkedItems);  
    event.preventDefault();  
  }  

  render() {
    return (
        <div>  
            <h1> Select Languages You Can Speak In </h1>  
        
            <form onSubmit={this.handleSubmit}>                 
            {  
                this.state.categories.map(item => (  
                <li key={item.id}>  
                    <label>   
                    <input  
                        type="checkbox"  
                        value={item.id}  
                        onChange={this.handleChange}  
                    /> {item.value}  
                     </label>                  
                </li>  
                ))  
            }  
                
            <br/>  
            <input type="submit" value="Submit" />  
            </form> 
           
        </div>
    )
  }
}
