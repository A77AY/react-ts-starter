import React, { Component } from 'react'

export default class Error extends Component {

    static propTypes = {};

    static defaultProps = {
        head: {
            title: 'Page not found'
        }
    };

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Page not found
            </div>
        );
    }

}