import React from 'react';
import Cell from './Cell.js';

class Board extends React.Component {
  render() {
    return (
      <div id="board" ref={this.props.boardRef}>
        <div className="chess-board">
          <div className="horizontal-algebraic grid-container"><div></div><div>a</div><div>b</div><div>c</div><div>d</div><div>e</div><div>f</div><div>g</div><div>h</div><div></div></div>

          { this.props.board.map((rows, rowIndex) => 
              <div className="grid-container" key={rowIndex} >
                <div className="vertical-algebraic">{8-rowIndex}</div>
                { rows.map((cols, colIndex) => <Cell color={cols.cell} location={cols.loc} ref={(node) => { this[`${cols.loc}`] = node; }} selectSpot={this.props.refSetKnight} key={cols.loc} idx={rowIndex.toString() + colIndex.toString()} />) }
                <div className="vertical-algebraic">{8-rowIndex}</div>
              </div>
            )
          }

          <div className="horizontal-algebraic grid-container"><div></div><div>a</div><div>b</div><div>c</div><div>d</div><div>e</div><div>f</div><div>g</div><div>h</div><div></div></div>        
        </div>
      </div>     
    )
  }
}

export default Board;