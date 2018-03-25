
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Hamburger.css';

class Hamburger extends Component {

  toggleActive = () => {
    // this.props.toggleSidebar(!this.props.sidebar.active);
  }

  render() {
    return (
      <div className="Hamburger"
        onClick={ this.toggleActive } >

        <div className="Hamburger__icon">
          <div className="Hamburger__bar" />
          <div className="Hamburger__bar" />
          <div className="Hamburger__bar" />
        </div>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);