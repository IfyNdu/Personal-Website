import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom'

import NavLink from './sub-components/nav-link';
import Hamburger from './sub-components/hamburger';
import { isInViewport } from '../../utilities/isInViewport';

// redux 
import store from '../../store'

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateBars: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    };
    componentDidMount = () => {
    }
    toggleMenu = () => {
        this.setState({
            animateBars: !this.state.animateBars
        });
    }
    render() {
        let p = ["home", "about", "skill", "experience"];
        let navLinks = p.map((item, index) => {
            return <NavLink
                key={`nav-${index}`}
                href={`${item}`}
                title={item} />

        });
        let isSticky = this.props.navBarIsVisible
            ? ''
            : '--isVisible'
        let isTransparent = !this.props.navBarIsTransparent
            ? ''
            : '--isTransparent'
        
        return (
            <div className={`Nav__container ${isSticky} ${isTransparent}`} >
                {navLinks}
                <div className="hamburger__Container">
                    <Hamburger toggleMenu={this.toggleMenu} animateBars={this.state.animateBars} />
                </div>
            </div>
        );
    }
}

NavigationBar.defaultProps = {};

const storeToProps = (store) => {
    return {
        navBarIsVisible: store.appReducer.navBarIsVisible,
        navBarIsTransparent: store.appReducer.navBarIsTransparent
    }
}

export default connect(storeToProps)(NavigationBar)