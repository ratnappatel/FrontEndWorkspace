import React, {Component} from 'react';

function StudentDetails(WrappedComponent)
{
    return class extends Component{
    
        render(){
            return(
                <WrappedComponent {...this.state}></WrappedComponent>
            )
        }
    }
}

export default StudentDetails;