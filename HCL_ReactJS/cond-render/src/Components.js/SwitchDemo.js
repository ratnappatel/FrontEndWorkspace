import React, { Component } from 'react';
export default class SwitchDemo extends Component {
    render() {
        let today = new Date().getDay();
        return (
            <div>
                <h1> It's  
                {(() => {
                    switch (today) {
                        case 0:
                            return today = "Sunday";
                        case 1:
                            return today = "Monday";
                        case 2:
                            return today = "Tuesday";
                        case 3:
                            return today = "Wednesday";
                        case 4:
                            return today = "Thursday";
                        case 5:
                            return today = "Friday";
                        case 6:
                            return today = "Saturday";
                        default:
                            console.log('default');
                    }
                })()}
                Today . </h1>
            </div>
        );
    }
}