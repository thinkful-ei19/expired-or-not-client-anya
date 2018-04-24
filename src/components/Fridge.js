import React from 'react';
import Item from './Item';

class Fridge extends React.Component {
    render() {
        const items = this.props.items.map((item, index, expTime) => (
            <li key={index}>
                <Item {...item} />
            </li>
        ))

        return(
            <div>
                <header>
                    <h1>My Fridge</h1>
                </header>
                <ul className="Item">
                    {items}
                </ul>
            </div>
        );
    }
}

export default Fridge;