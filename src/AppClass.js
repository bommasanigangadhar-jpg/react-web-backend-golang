import React, { Component } from "react";
import './HelloWorld.css';

export default class AppClass extends Component {

    render() {
        return (
            <h1 className="h1-red">{this.props.message}</h1>
        );
    }
}