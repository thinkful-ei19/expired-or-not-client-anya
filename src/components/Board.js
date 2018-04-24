import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lists from './Lists';
import Fridge from './Fridge';
//import AddList from './AddList';
import {addList} from '../actions/lists';
import AddList from './AddList';
import {fetchBoard} from '../actions/board';


class Board extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBoard());
  }

  addList(name) {
    this.props.dispatch(addList(name));
  }

  render() {
    console.log('this.props board', this.props);
    const lists = this.props.lists.map((list, index) => (
      <li className="list-wrapper" key={index}>
          <Lists index={index} {...list} />
      </li>
    ));

    return (
      <div className="Main">
        <header className="header">
          <h1 className="title">Expired Or Not?</h1>
        </header>
        <section>
            <Fridge items={['milk', 'butter', 'bread']}/>
            <ul >
            <Lists items={['milk', 'butter', 'bread']}/>
            <br />
            <li className="add-list-wrapper">
                        <AddList
                            type="card"
                            onAdd={text => this.addList(text)}
                        />
            </li>
                    
            </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(Board);
