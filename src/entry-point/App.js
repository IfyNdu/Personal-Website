import React, { Component } from 'react';
import { connect } from 'react-redux';

//custom
import NavigationBar from '../containers/navbar/navbar.component';
import Body from '../containers/body/body.component';
import { vhTOpx } from '../utilities/convertVhtoPx'

// redux
import store from '../store'
import { setNavBarVisibility, setNavBarTransparency } from './App.actions'

//magic
import { VIEWPORT_HEIGHT_33 } from '../utilities/magicValues'

class App extends Component {
  constructor(props) {
    super(props);

  };

  componentDidMount() {
    let previousScrollPosition = window.scrollY || window.pageYOffset ||
      document.documentElement.scrollTop;
    let navBarIsVisible = true;
    let navBarIsTransparent = true;
    let viewportHeight33 = vhTOpx(VIEWPORT_HEIGHT_33);

    window.addEventListener('scroll', function (e) {
      let currentScrollPosition = window.scrollY || window.pageYOffset ||
        document.documentElement.scrollTop;

      if (previousScrollPosition > currentScrollPosition && !navBarIsVisible) {
        store.dispatch(setNavBarVisibility(true));
        navBarIsVisible = !navBarIsVisible;
      } else if (previousScrollPosition < currentScrollPosition && navBarIsVisible) {
        navBarIsVisible = !navBarIsVisible;
        store.dispatch(setNavBarVisibility(false));
      } else if (currentScrollPosition < viewportHeight33 && !navBarIsTransparent) {
        navBarIsTransparent = !navBarIsTransparent
        store.dispatch(setNavBarTransparency(true));
      } else if (currentScrollPosition > viewportHeight33 && navBarIsTransparent) {
        navBarIsTransparent = !navBarIsTransparent
        store.dispatch(setNavBarTransparency(false));
      }
      previousScrollPosition = currentScrollPosition;
    });
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Body />
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    navBarIsVisible: store.appReducer.navBarIsVisible
  }
}
export default connect(storeToProps)(App);
