import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../src/counter/counter';

// class Timer extends React.Component {
//   render() {
//     return (
//       <div>Click here to start a timer!</div>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: new Array(9).fill(null),
      xIsNext: true,
    };
  }

  whoIsNext = () => {
    return this.state.xIsNext ? 'X' : 'O';
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.whoIsNext();
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const status = 'Next player: ' + (this.whoIsNext());

    return (
      <div className="fieldHeader">
        {/*<Timer/>*/}
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
