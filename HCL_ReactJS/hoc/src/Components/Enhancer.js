import React, {Component} from 'react';

function Enhancer(ListComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <h1>I am Going to Change your Avtar.....</h1>
                    <ListComponent></ListComponent>
                </div>
            );
        }
    }
}
export default Enhancer;