import React from 'react';
import { connect } from 'react-redux';
import {fetchBoard} from '../actions/board';
import Fridge from './Fridge';
import AddItem from './AddItem';
import './Main.css';




class Main extends React.Component {

  // componentDidMount() {
  //   this.props.dispatch(fetchBoard());
  // }

  render() {

    return (
      <div className="Main">
        <Fridge />
        <AddItem />
      </div>
    );
  }
}

export default Main;
