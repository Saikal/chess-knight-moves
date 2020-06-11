import React from 'react';

class Cell extends React.Component {

  onClick (e) {
    this.props.selectSpot(e.target.dataset.location);
  }

  render() {
    return (
      <div ref={(node) => { this.cell = node; }} className={this.props.color + ' grid-item'}  data-location={this.props.location} id={this.props.idx} onClick={this.onClick.bind(this)} >
      </div>
    )
  }
}

export default Cell;
