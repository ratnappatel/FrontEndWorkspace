import React, { Component } from 'react';
export default class LogicalOp extends Component {
    render() {
        let user = true;
        let isAdmin = true;
        let result;
        if (user && isAdmin) {
            result = 'Conditrion is truthy';
        }
        return (
            <div className="row">
                {
                    result
                }
            </div>
        );
    }
}