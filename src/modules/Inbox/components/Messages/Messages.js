import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {

  render() {
    return (
      <div className="Messages">

        <div className="Messages__item Messages__item--unread">
          <div className="Messages__item__content">
            <div className="Messages__item__icon" />
            <div className="Messages__item__text">
              <div className="line">
                <div className="sender">Mark Zuckerberg</div>
                <div className="timestamp">12 mins</div>
              </div>
              <div className="line line2">
                <div className="subject">I was right - and that’s not good for you</div>
                <div className="dots">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Messages__item">
          <div className="Messages__item__content">
            <div className="Messages__item__icon" />
            <div className="Messages__item__text">
              <div className="line">
                <div className="sender">Sheryl Sandberg</div>
                <div className="timestamp">45 mins</div>
              </div>
              <div className="line line2">
                <div className="subject">We’re starting in 5 HOURS</div>
                <div className="dots">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Messages__item">
          <div className="Messages__item__content">
            <div className="Messages__item__icon" />
            <div className="Messages__item__text">
              <div className="line">
                <div className="sender">Linus Torvalds</div>
                <div className="timestamp">Yesterday</div>
              </div>
              <div className="line line2">
                <div className="subject">It’s time to rethink Black Friday</div>
                <div className="dots">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Messages;
