import React, { Component } from 'react';
import './ScrollBar.css';

class ScrollBar extends Component {

  constructor(props) {
    super(props);
    
    this.isScrolling = false;

    this.bar = null;
    this.tab = null;
    this.container = null;


  }
  
  setScroll = e => {
    this.isScrolling = true;
    this.scroll(e);
  }

  unsetScroll = e => {
    this.isScrolling = false;
  }
  
  reset = () => {

    this.bar.style.top = this.container.offsetTop + 'px';
    this.tab.style.height = ((this.container.clientHeight / this.container.scrollHeight) * 100) + '%';

  }

  scroll = e => {

    e.preventDefault();

    if (!this.isScrolling) return true;
    
    /**
     * Implement Here
     */

  }

  componentDidMount() {

    this.bar = this.refs._scroll_bar;
    this.tab = this.refs._scroll_tab;
    this.container = this.bar.parentElement;
    
    this.reset();
    
    // Initializing Events
    this.bar.addEventListener('mousedown', this.setScroll);
    window.addEventListener('mouseup', this.unsetScroll);
    window.addEventListener('mousemove', this.scroll);

  }

  render() {
    return (
      <div className="ScrollBar" ref="_scroll_bar">
        <div className="ScrollBar__tab" ref="_scroll_tab"/>
      </div>
    );
  }

}

export default ScrollBar;
