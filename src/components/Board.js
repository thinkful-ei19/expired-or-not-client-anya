import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lists from './Lists';
import Fridge from './Fridge';
import AddList from './AddList';
import {addList} from '../actions/lists';
import {fetchBoard} from '../actions/board';


class Board extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBoard());
  }

  addList(name) {
    this.props.dispatch(addList(name));
  }

  render() {

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
        <body>
          <main>
            <Fridge items={['milk', 'butter']}/>
            <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <addList
                            type="list"
                            onAdd={name => this.addList(name)}
                        />
                    </li>
            </ul>
          </main>
        </body>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(Board);
