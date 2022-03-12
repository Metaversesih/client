import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.png") } alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>Dheeraj Choudhury</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Leader</Trans></span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/problems') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/problems">
              <span className="menu-title"><Trans>Problems</Trans></span>
              <i className="mdi mdi-comment-question-outline menu-icon"></i>
            </Link>
          </li>
        
          <li className={ this.isPathActive('/solution') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/solution">
              <span className="menu-title"><Trans>Solution</Trans></span>
              <i className="mdi mdi-trophy-variant menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/inovation') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/inovation">
              <span className="menu-title"><Trans>Inovation</Trans></span>
              <i className="mdi mdi-lightbulb menu-icon"></i>
            </Link>
          </li>
          <li className={ this.isPathActive('/investment') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/investment">
              <span className="menu-title"><Trans>Investment</Trans></span>
              <i className="mdi mdi-cash-usd menu-icon"></i>
            </Link>
          </li>
         
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);