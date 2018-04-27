import React from 'react';
//import { connect } from 'react-redux';
import Fridge from './Fridge';
import AddItem from './AddItem';
import './Main.css';




class Main extends React.Component {

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
