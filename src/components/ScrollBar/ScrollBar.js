import React, { Component } from 'react';
import './ScrollBar.css';

class ScrollBar extends Component {

  constructor(props) {
    super(props);
    
    this.isScrolling = false;
  }
  
  setScroll = e => {
    this.isScrolling = true;
    this.scroll(e);
  }

  unsetScroll = e => {
    this.isScrolling = false;
  }
  
  scroll = e => {

    e.preventDefault();

    if (!this.isScrolling) return true;
    
    /**
     * Implement Here
     */

  }

  render() {
    return (
      <div className="ScrollBar" ref="_scrollbar">
        <div className="ScrollBar__tab" />
      </div>
    );
  }

}

export default ScrollBar;
