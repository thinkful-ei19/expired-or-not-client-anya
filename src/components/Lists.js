import React from 'react';
import {addItem} from '../actions/item';
import Item from './Item';

export default class List extends React.Component {
    addItem(name) {
        this.props.dispatch(addItem(name, this.props.listIndex, this.props.expTime));
    }

    render() {
        const items = this.props.items.map((item, index, expTime) => (
            <li key={index}>
                <Item {...item} />
            </li>
        ))

        return(
            <div>
                <header>
                    <h1 placeholder="enter date">this.props.expTime</h1>
                </header>
                <ul className="Item">
                    {items}
                </ul>
                <button>Edit List</button>
                <button>Remove Item</button>
                <button>Remove All</button>
            </div>
        );
    }
}

