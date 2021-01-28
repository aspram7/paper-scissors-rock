import React, { Component } from "react";

import SectionHome from "../Sections/SectionHome/SectionHome";
import SectionPlay from "../Sections/SectionPlay/SectionPlay";

import "./Section.scss";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      selectedItem: 1,
    };
  }

  changePage(n, item) {
    this.setState({ page: n, selectedItem: item });
  }

  render() {
    return (
      <div className="section-content">
        {this.state.page === 1 ? (
          <SectionHome onClick={(item) => this.changePage(2, item)} />
        ) : (
          <SectionPlay id={this.state.selectedItem} onClick={() => this.changePage(1)} onChangeScore={this.props.onChangeScore} />
        )}
      </div>
    );
  }
}

export default Section;
