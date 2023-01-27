import React, { Component } from 'react';
export default class TernaryDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beverage: 2
        }
    }
    render() {
        return (
            <div >
                {
                    (this.state.beverage === 21)
                        ? <p> Beer </p>
                        : <p> Coke </p>
                }
            </div>
        );
    }
}