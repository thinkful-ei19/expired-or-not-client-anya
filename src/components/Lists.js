import React from 'react';
import {addItem} from '../actions/item';
import Item from './Item';

export default class List extends React.Component {
    addItem(name) {
        this.props.dispatch(addItem(name, this.props.listIndex, this.props.expTime));
    }

    render() {
        console.log('this.props', this.props);
        const items = this.props.items.map((item, index, expTime) => (
            <li key={index}>
                <Item {...item} />
            </li>
        ))

        return(
            <div>          
                <h1 placeholder="enter date">List</h1>
                <ul className="list">
                    {items}
                </ul>
                <button>Edit List</button>
                <button>Remove Item</button>
                <button>Remove All</button>
            </div>
        );
    }
}


