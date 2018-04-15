import React, { Component } from 'react';
import './ScrollBar.css';

class ScrollBar extends Component {

  constructor(props) {
    super(props);    

    this.bar = null;
    this.tab = null;
    this.container = null;

    this.isScrolling = false;
    this.mouseOrigin = null;
  }
  
  setScroll = e => {
    this.isScrolling = true;
    this.scroll(e);
  }

  unsetScroll = e => {
    this.isScrolling = false;
    this.mouseOrigin = null;
  }
  
  reset = () => {

    this.bar.style.top = this.container.offsetTop + 'px';
    this.bar.style.height = this.container.clientHeight + 'px';
    this.tab.style.height = (((this.container.clientHeight + this.container.offsetTop) / this.container.scrollHeight) * 100) + '%';

  }

  scroll = e => {

    e.preventDefault();

    if (!this.isScrolling) return true;
    
    const minY = 0;
    const maxY = (this.bar.clientHeight - this.tab.clientHeight);
    const posY = (e.y || e.clientY || e.pageY || e.screenY) - this.bar.offsetTop;

    if (this.mouseOrigin === null) {
      this.mouseOrigin = posY - this.tab.offsetTop;
    }

    let position = posY - this.mouseOrigin;

    position = (position < minY) ? minY : position;
    position = (position >= maxY) ? maxY : position;

    // Finding the percentage of movement in the Scrollbar
    const movementRate = (position / (this.bar.clientHeight - this.tab.clientHeight)) * 100;

    // Finding the percentage equalent of the available Scrollheight
    const scrollTop = (movementRate / 100) * (this.container.scrollHeight - this.container.clientHeight);

    this.tab.style.top = position + 'px';
    
    this.container.scrollTop = scrollTop;

    this.reset();

  }

  componentDidMount() {

    this.bar = this.refs._scroll_bar;
    this.tab = this.refs._scroll_tab;
    this.container = this.bar.parentElement;
    
    this.reset();
    
    // Initializing Events
    this.tab.addEventListener('mousedown', this.setScroll);
    global.addEventListener('mouseup', this.unsetScroll);
    global.addEventListener('mousemove', this.scroll);
    global.addEventListener('resize', this.reset);

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
