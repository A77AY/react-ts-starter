import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import config from '../../config'
import style from './html.styl'

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
        let style = {
            margin: 0,
            padding: 0,
            height: '100%',
            minHeight: '100%',
            width: '100%',
            minWidth: '100%',
            fontFamily: ['sans-serif', 'Helvetica', 'Arial'],
            fontSize: '14px'
        };
        return (
            <html style={style}>
                <head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body style={style}>
                    <div>
                        <div style={{height: '20%', minHeight: '100px'}}>
                            <nav>
                                <Link to="/">Home</Link>
                                <br />
                                <Link to="error">Error</Link>
                            </nav>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                    <script src={config.env === "dev" ? config.webpack.url + '/static/bundle.js' : 'static/bundle.js'}></script>
                </body>
            </html>
        );
    }

}