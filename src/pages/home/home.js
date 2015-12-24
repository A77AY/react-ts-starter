import React, {Component, PropTypes} from 'react'

export default class Home extends Component {

    static propTypes = {
    };

    static defaultProps = {
        head: {
            title: "Home page",
            decription: ""
        }
    };

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Home page
            </div>
        );
    }

}