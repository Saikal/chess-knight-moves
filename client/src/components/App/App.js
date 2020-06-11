import React from 'react';
import axios from 'axios';

import Wizard from '../Wizard/Wizard';
import Board from '../Board/Board';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.refBoard = React.createRef();
    this.refButtonMove = React.createRef();
    this.refLoader = React.createRef();
    this.refHistory = React.createRef();

    this.state = {
      size: 8,
      cellSelect: null,
      moves: 0,
      movesFirst: [],
      movesSecond: [],
      activeMoves: [],
      history: "",
      board: 
        [ [ { cell: 'white', loc: '0_0' },{ cell: 'black', loc: '0_1' },{ cell: 'white', loc: '0_2' },{ cell: 'black', loc: '0_3' },{ cell: 'white', loc: '0_4' },{ cell: 'black', loc: '0_5' },{ cell: 'white', loc: '0_6' },{ cell: 'black', loc: '0_7' } ],
          [ { cell: 'black', loc: '1_0' },{ cell: 'white', loc: '1_1' },{ cell: 'black', loc: '1_2' },{ cell: 'white', loc: '1_3' },{ cell: 'black', loc: '1_4' },{ cell: 'white', loc: '1_5' },{ cell: 'black', loc: '1_6' },{ cell: 'white', loc: '1_7' } ],
          [ { cell: 'white', loc: '2_0' },{ cell: 'black', loc: '2_1' },{ cell: 'white', loc: '2_2' },{ cell: 'black', loc: '2_3' },{ cell: 'white', loc: '2_4' },{ cell: 'black', loc: '2_5' },{ cell: 'white', loc: '2_6' },{ cell: 'black', loc: '2_7' } ],
          [ { cell: 'black', loc: '3_0' },{ cell: 'white', loc: '3_1' },{ cell: 'black', loc: '3_2' },{ cell: 'white', loc: '3_3' },{ cell: 'black', loc: '3_4' },{ cell: 'white', loc: '3_5' },{ cell: 'black', loc: '3_6' },{ cell: 'white', loc: '3_7' } ],
          [ { cell: 'white', loc: '4_0' },{ cell: 'black', loc: '4_1' },{ cell: 'white', loc: '4_2' },{ cell: 'black', loc: '4_3' },{ cell: 'white', loc: '4_4' },{ cell: 'black', loc: '4_5' },{ cell: 'white', loc: '4_6' },{ cell: 'black', loc: '4_7' } ],
          [ { cell: 'black', loc: '5_0' },{ cell: 'white', loc: '5_1' },{ cell: 'black', loc: '5_2' },{ cell: 'white', loc: '5_3' },{ cell: 'black', loc: '5_4' },{ cell: 'white', loc: '5_5' },{ cell: 'black', loc: '5_6' },{ cell: 'white', loc: '5_7' } ],
          [ { cell: 'white', loc: '6_0' },{ cell: 'black', loc: '6_1' },{ cell: 'white', loc: '6_2' },{ cell: 'black', loc: '6_3' },{ cell: 'white', loc: '6_4' },{ cell: 'black', loc: '6_5' },{ cell: 'white', loc: '6_6' },{ cell: 'black', loc: '6_7' } ],
          [ { cell: 'black', loc: '7_0' },{ cell: 'white', loc: '7_1' },{ cell: 'black', loc: '7_2' },{ cell: 'white', loc: '7_3' },{ cell: 'black', loc: '7_4' },{ cell: 'white', loc: '7_5' },{ cell: 'black', loc: '7_6' },{ cell: 'white', loc: '7_7' } ]
        ]
    }
  }

  toggleLoader (loader) {
    this.refLoader.current.style.visibility = loader;
  }

  refHistoryUpdate (history) {
    this.setState({
      history: history
    });
    this.refHistory.current.innerHTML = history;
  }

  convertToAlgebraic (loc) {
    const algebraic = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      '3': 'd',
      '4': 'e',
      '5': 'f',
      '6': 'g',
      '7': 'h'
    }
    return algebraic[loc[2]] + (8 - parseInt(loc[0], 10));
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false;
  }

  clickEnable (loc) {
    this.refBoard.current[`${loc}`].cell.style.pointerEvents = 'auto';
  }

  clickDisable (loc) {
    this.refBoard.current[`${loc}`].cell.style.pointerEvents = 'none';
  }

  refKnightsToggle (nextLocs, prevLocs) {
    prevLocs.forEach(loc => {
      this.refBoard.current[`${loc}`].cell.style.backgroundImage = "none";
      this.clickDisable(loc);
    });
    nextLocs.forEach(loc => {
      this.refBoard.current[`${loc}`].cell.style.backgroundImage = "url('knight-white.svg')";
      this.clickEnable(loc);
    });
  }

  refSetKnight (location) {
    this.setState({
      cellSelect: location
    });
    if(this.state.cellSelect) {
      this.refBoard.current[`${this.state.cellSelect}`].cell.style.backgroundImage = "none";
    }
    if (this.state.moves === 2) {
      this.refKnightsToggle(this.state.activeMoves, []);
    }
    this.refBoard.current[`${location}`].cell.style.backgroundImage = "url('knight.svg')";
  }

  knightApi () {
    this.toggleLoader("visible");
    axios.post('/move', {
      location: this.convertToAlgebraic(this.state.cellSelect)
    })
    .then(res => {
      if(res.data) {
        this.refKnightsToggle(res.data['moves_first'], this.state.activeMoves);
        this.refSetKnight(this.state.cellSelect);
        this.refHistoryUpdate(this.state.history + " " + this.convertToAlgebraic(this.state.cellSelect));
        this.setState({
          activeMoves: res.data['moves_first'],
          movesFirst: res.data['moves_first'],
          movesSecond: res.data['moves_second'],
          cellSelect: null,
          moves: 1
        });
        this.refButtonMove.current.innerHTML = "Turn II";
        const that = this;
        this.state.board.map(r => r.map(c => that.clickDisable(c['loc'])));
        this.toggleLoader("hidden");
      } else window.location.reload();
    }, (err) => {
      console.log('Error: ', err);
    }); 
  }

  knightMove () {
    if(!this.state.moves && this.state.cellSelect) {
      this.knightApi();
      this.setState({
        moves: 1
      })
    } else if(this.state.moves && !this.state.cellSelect) {
        if(this.state.moves === 1) {
          this.refKnightsToggle(this.state.movesSecond, this.state.activeMoves);
          this.setState({
            activeMoves: this.state.movesSecond,
            moves: 2
          });
          this.refButtonMove.current.innerHTML = "Turn I";

          const that = this;
          this.state.movesSecond.forEach(function(loc) {that.clickEnable(loc)});
        }
    } else if(this.state.moves && this.state.cellSelect) {
        this.refSetKnight(this.state.cellSelect);
        this.knightApi();
        this.setState({ moves: 1 });
    } 
  }

  setToInitial () {
    this.setState({
      cellSelect: null,
      movesFirst: [],
      movesSecond: [],
      activeMoves: [],
      history: "",
      moves: 0,
    });
    const that = this;
    this.refHistoryUpdate("");
    this.refKnightsToggle([], this.state.activeMoves);
    this.state.board.map(r => r.map(c => that.clickEnable(c['loc'])));
  }

  render() {
    return (
      <div id="chess-knight">
        <div className="loader" ref={this.refLoader}><h1>LOADING...</h1></div>
        <Wizard refSetKnight={this.refSetKnight.bind(this)} onClickTurn={this.knightMove.bind(this)} setToInitial={this.setToInitial.bind(this)} toggleLoader={this.toggleLoader.bind(this)}/>
        <div className="board-text">
          <h1>Chess - Knight</h1>
        </div>
        <hr />
        <Board ref={this.refBoard} board={this.state.board} refSetKnight={this.refSetKnight.bind(this)} />
        <button className="btn-app" onClick={this.knightMove.bind(this)} ref={this.refButtonMove} >Turn I</button>
        <div className="board-text history">Moves History<br></br>
          <h1 ref={this.refHistory}> </h1>
        </div>
      </div>
    );
  }
}

export default App;
