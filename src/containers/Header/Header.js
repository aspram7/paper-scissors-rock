import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    const { score } = this.props;

    return (
      <header>
        <h1 className="header_title">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </h1>
        <div className="scoreBox">
          <div className="scoreBox_title">score</div>
          <div className="scoreBox-score">{score}</div>
        </div>
      </header>
    );
  }
}

export default Header;
