import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import config from '../../config'

export default class HTML extends Component {

    static propTypes = {};

    static defaultProps = {};

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        let title = "";
        let description = "";
        if (React.Children.only(this.props.children).props.head) {
            let head = React.Children.only(this.props.children).props.head;
            title = head.title || "";
            description = head.description || head.title;
        }
        return (
            <html>
                <head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </head>
                <body>
                    <div className="app">
                        <nav>
                            <Link to="/">Hoem</Link>
                            <Link to="test">Hoemeee</Link>
                        </nav>
                        {this.props.children}
                    </div>
                    <script src={config.env === "dev" ? config.webpack.url + '/static/bundle.js' : 'static/bundle.js'}></script>
                </body>
            </html>
        );
    }

}