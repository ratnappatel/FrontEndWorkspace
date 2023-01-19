import React, { Component } from 'react'
import { CricketersChild } from './CricketersChild';

export default class Cricketrs extends Component {
    constructor(){
        super();
        this.state={
            list:[
                {
                    "name":"Sachin",
                    "score":456
                },
                {
                    "name":"Gill",
                    "score":456
                },
                {
                    "name":"Surya",
                    "score":456
                }
            ]
        };
    }
  render() {
    return (
      <div>
        <CricketersChild list={this.state.list}></CricketersChild>
      </div>
    )
  }
}
