import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'

import NavLink from './sub-components/nav-link';
import Hamburger from './sub-components/hamburger';
import { isInViewport } from '../../utilities/isInViewport';
import { NAVIGATION_LINKS } from './navbar-list'

// redux 
import store from '../../store'
import { connect } from 'react-redux';
import { setSideMenuStatus } from './navbar.actions'

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
        store.dispatch(setSideMenuStatus(!this.props.isMenuOpen));
        // this.setState({
        //     animateBars: !this.state.animateBars
        // }, () => {
        //     store.dispatch(setSideMenuStatus(!this.props.isMenuOpen));
        // });
    }

    render() {
        let navLinks = NAVIGATION_LINKS.map((item, index) => {
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
            <div
                className={`Nav__container ${isSticky} ${isTransparent} ${this.props.isMenuOpen ? '--slideOut' : ''}`} >
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
        navBarIsTransparent: store.appReducer.navBarIsTransparent,
        isMenuOpen: store.navigationReducer.isMenuOpen
    }
}

export default connect(storeToProps)(NavigationBar)