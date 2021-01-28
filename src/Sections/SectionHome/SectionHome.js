import React, { Component } from "react";
import Link from "../../components/Link/Link";
import { images } from "../../data-mockup/image-mockup";

import "./SectionHome.scss";

import triangle from "../../assets/icons-svg/triangle.svg";

class SectionHome extends Component {
  render() {
    return (
      <div className="section-home-content">
        <img className="triangleImg" src={triangle} alt="triangle" />
        {images.map((el) => {
          return (
            <div key={el.id} className="section-home-item">
              <Link data={el} onClick={this.props.onClick} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SectionHome;
