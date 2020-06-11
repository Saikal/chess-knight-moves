import React from 'react';
import ReactDOM from "react-dom";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  selectCell (loc) {
    this.props.refSetKnight(loc);
    this.props.toggleLoader("hidden");
  }

  onClick () {
    this.setState({
      step: this.state.step + 1
    });
    if(this.state.step === 0) {
      this.props.toggleLoader("visible");
      let that = this;
      setTimeout(function(){that.selectCell("1_4");}, 400);
    } else if(this.state.step === 2) {
      this.props.onClickTurn();
    } else if(this.state.step === 4) {
      this.props.onClickTurn();
    } else if(this.state.step === 7) {
      this.props.setToInitial();
      ReactDOM.findDOMNode(this).style.display = 'none';
    }
  }

  render() {
    return (
      <div id="wizard" ref={(node) => { this.cell = node }}>
        { (() => {
            if(this.state.step === 0) {
              return (<h1 className="h1-header">This is step-by-step instruction How to use the App.<br></br>(Click button "Next" to navigate the Instruction)</h1>)
            } else if(this.state.step === 1) {
              return (<h1 className="h1-board">Place Knight's initial position on the board by selecting any cell on the board.<br></br>(Click "Next" to continue)</h1>)
            } else if(this.state.step === 2) {
              return (<h1 className="h1-btn">Click button "Turn I" to see the first possible Knight moves.<br></br>(Click "Next" to continue)</h1>)
            } else if(this.state.step === 3) {
              return (<h1 className="h1-board">There are first possible Knight moves on the board.<br></br>(Click "Next" to continue)</h1>)
            } else if(this.state.step === 4) {
              return (<h1 className="h1-btn">Click button "Turn II" to see the second possible Knight moves.<br></br>(Click "Next" to continue)</h1>)
            } else if(this.state.step === 5) {
              return (<h1 className="h1-board">There are second possible Knight moves on the board.<br></br>(Click "Next" to continue)</h1>)
            } else if(this.state.step === 6) {
              return (<h1 className="h1-board">Choose your next Knight position by clicking on<br></br>any of the given moves.<br></br>Keep in mind, that only highlighted cells are clickable.<br></br> and so on...</h1>)
            } else if(this.state.step === 7) {
              return (<h1 className="h1-history">See Moves History to Track your moves.<br></br>Click "Next" to start the Game! Good Luck!</h1>)
            }          
          })()
        }
        <button className="wizard-next" onClick={this.onClick.bind(this)} >Next</button>
      </div>
    )
  }
}

export default Wizard;