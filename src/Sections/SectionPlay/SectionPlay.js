import React, { Component } from "react";

import { images } from "../../data-mockup/image-mockup";
import Button from "../../components/Button/Button";

import "./SectionPlay.scss";

const borderColor = {
  1: "home_paper",
  2: "home_scissors",
  3: "home_rock",
};
const winnerAlgorithm = { 1: 3, 2: 1, 3: 2 };

class SectionPlay extends Component {
  state = {
    gameProcess: true,
    countdown: 3,
    ramdomNumber: 1,
  };

  componentDidMount() {
    this.intarval = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.countdown <= 0 && this.state.gameProcess) {
      clearInterval(this.intarval);
      const ramdomNumber = Math.ceil(Math.random() * 3);
      this.setState({ gameProcess: false, ramdomNumber }, () => {
        const { id } = this.props;
        const { ramdomNumber } = this.state;
        let currentScore = winnerAlgorithm[id] === ramdomNumber ? 1 : id === ramdomNumber ? 0 : -1;

        this.props.onChangeScore(currentScore);
      });
    }
  }

  render() {
    const { id } = this.props;
    const { gameProcess, countdown, ramdomNumber } = this.state;
    const item = images.find((el) => el.id === id);
    const itemRamdom = images.find((el) => el.id === ramdomNumber);

    return (
      <div className="section-play-content">
        <div className="pick">
          <div className="pick_title">you picked {item.img.alt}</div>
          <div className={`pick_item ${borderColor[id]} ${!gameProcess && winnerAlgorithm[id] === ramdomNumber && "winner"}`}>
            <img src={item.img.url} alt={item.img.alt} />
          </div>
        </div>
        {!gameProcess && (
          <div className="play_again">
            {winnerAlgorithm[id] === ramdomNumber ? <h1>YOU WIN</h1> : id === ramdomNumber ? <h1>DRAW</h1> : <h1>YOU LOSE</h1>}
            <Button onClick={this.props.onClick} className="section-play-button">
              Play again
            </Button>
          </div>
        )}
        <div className="pick">
          <div className="pick_title">the house picked {!gameProcess && itemRamdom.img.alt}</div>
          {gameProcess ? (
            <div className="game-process">{countdown}</div>
          ) : (
            <div
              className={`pick_item ${borderColor[ramdomNumber]} ${
                !gameProcess && winnerAlgorithm[id] !== ramdomNumber && id !== ramdomNumber && "winner"
              }`}
            >
              <img src={itemRamdom.img.url} alt={itemRamdom.img.alt} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SectionPlay;
