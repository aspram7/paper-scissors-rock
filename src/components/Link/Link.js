import React, { Component } from "react";

import "./Link.scss";

class Link extends Component {
  render() {
    const { data, onClick } = this.props;

    return (
      <a href="/#" onClick={() => onClick(data.id)}>
        <div className={`home_item ${data.nameClass}`}>
          <img src={data.img.url} alt={data.img.alt} />
        </div>
      </a>
    );
  }
}

export default Link;
