import React from 'react';

export default function Item(props) {
    return (
        <div className="item">
            {props.name} - {props.expTime}
        </div>
    );
};

Item.defaultProps = {
            name: 'milk',
            expTime: '1 week'
};