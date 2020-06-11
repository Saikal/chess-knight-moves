import React from 'react';
import ReactDOM from 'react-dom';
import {Enzyme, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
 
Enzyme.configure({ adapter: new Adapter() });

import App from './components/App/App';
import Board from './components/Board/Board';
import Cell from './components/Board/Cell';
import Wizard from './components/Wizard/Wizard';


describe('Board', () => {
  let size = 8;
  let color = "white";
  let boardStruct = [];
  
  for (let i = 0; i < size; i++){
    boardStruct.push([]);
    for (let j = 0; j < size; j++){
      boardStruct[i].push({'cell': color, 'loc':`${i}_${j}`});
      color = (color === "white" ? "black" : "white");
    }
    color = (color === "white" ? "black" : "white");
  }

  const wrapper = shallow(<Board board={boardStruct}/>);

  it('renders 64 Cell components without crashing', () => {
    expect(wrapper.find(Cell)).to.have.lengthOf(64);
  });

  it('renders 10 `.grid-container` without crashing', () => {
    expect(wrapper.find('.grid-container')).to.have.length(10);
  });
});

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);    
  });

  const wrapper = shallow(<App />);
  it('renders one Wizard component', () => {
    expect(wrapper.find(Wizard)).to.have.lengthOf(1);
  });

  it('renders one Board component', () => {
    expect(wrapper.find(Board)).to.have.lengthOf(1);
  });

  it('renders one history components', () => {
    expect(wrapper.find('.history')).to.have.length(1);
  });

  it('renders one loader component', () => {
    expect(wrapper.find('.loader')).to.have.length(1);
  });
});

describe('<Wizard />', () => {
  it('renders Wizard without crashing', () => {
    const wrapper = shallow(<Wizard />);
  });

  it('renders one <Wizard /> component', () => {
    const wrapper = shallow(<Wizard />);
    expect(wrapper.find('#wizard')).to.have.length(1);
  });
});
