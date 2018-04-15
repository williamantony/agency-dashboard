import React, { Component } from 'react';
import './ScrollBar.css';

class ScrollBar extends Component {

  constructor(props) {
    super(props);
    
    this.isScrolling = false;

    this.bar = null;
    this.tab = null;
    this.container = null;

    this.sp = 0;

  }
  
  setScroll = e => {
    this.isScrolling = true;
    this.sp = e.y - 100;
    // this.scroll(e);
  }

  unsetScroll = e => {
    this.isScrolling = false;
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

    let position = posY - (this.tab.clientHeight / 2);

    position = (position < minY) ? minY : position;
    position = (position >= maxY) ? maxY : position;

    const movementRate = (position / (this.bar.clientHeight - this.tab.clientHeight)) * 100;

    const scrollTop = (movementRate / 100) * (this.container.scrollHeight - this.container.clientHeight);

    this.tab.style.top = position + 'px';

    this.container.scrollTop = scrollTop;

    console.log('movementRate:', movementRate, scrollTop);

    this.reset();

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
