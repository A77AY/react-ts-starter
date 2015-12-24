import React, {Component} from 'react'

export default function withViewport(ComposedComponent) {
    return class Viewport extends Component {

        state = {
            viewport: { width: 1366, height: 768 }
        };

        constructor(props) {
            super(props);
        }

        componentDidMount() {
            this.handleWindowResize(null);
            window.addEventListener('resize', this.handleWindowResize);
            window.addEventListener('orientationchange', this.handleWindowResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowResize);
            window.removeEventListener('orientationchange', this.handleWindowResize);
        }

        render() {
            return <ComposedComponent {...this.props} viewport={this.state.viewport}/>;
        }

        handleWindowResize = (e) => {
            let width = window.innerWidth;
            let height = window.innerHeight;
            if (this.state.viewport.width !== width || this.state.viewport.height !== height) {
                this.setState({ viewport: {  width: width, height: height } });
            }
        }

    };
}