import React, { Component } from 'react';
import Copyright from './sub-components/copyright'

class Footer extends Component {
    constructor(props) {
        super(props);

    };
    componentDidMount = () => {
    }

    render() {

        return (
            <div className={`Footer__container`} >
                <Copyright />
            </div>
        );
    }
}

Footer.defaultProps = {};

export default Footer