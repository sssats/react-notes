import React from "react";

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = props.onRemove;
    }

    render() {
        return <span>{this.props.title} <b onClick={() => this.onRemove(this)}>&times;</b></span>
    }
}