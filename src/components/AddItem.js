import React from 'react';
//import uuid from 'node-uuid';
import './AddItem.css';

const uuidv3 = require('uuid/v3');

class AddItem extends React.Component {
    constructor() {
        super();

        this.state = {
            itemName: '',
            datePurchased: '',
            //expTime: '',
            quantity: 0
          };
    }

    handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState(currentState => {
            return {
                ...currentState,
                [inputName]: inputValue
            };
        });
    }

    handleSubmitEvent(e) {
        e.preventDefault();

        const {addItem} = this.props;
        const {
            itemName, 
            datePurchased,
            quanity
        } = this.state;

        const listItem = {
            id: uuidv3(),
            date: new Date(),
            name: itemName.trim(),
            datePurchased: datePurchased.trim(),
            quanity: parseInt(quanity, 10)
        };

        addItem(listItem);

    }

    render() {
        return(
            <form onSubmit={this.handleSubmitEvent} className="column">
                <h3 className="page-header">Add New Item</h3>

                <div className="form-group">
                <label  htmlFor="itemName">
                        Name 
                        <span id="styleRequired">*</span>
                </label>
                <input 
                    type="text"
                    className="form-control"
                    id="itemName"
                    name="itemName"
                    placeholder="Enter name"
                    required
                    value={this.state.itemName}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                <label htmlFor="datePurchased">
                    Description
                    <span id="styleRequired">*</span>
                </label>
                <input 
                    type="text"
                    className="form-control"
                    id="datePurchased"
                    name="datePurchased"
                    placeholder="Enter date purchased"
                    required
                    value={this.state.datePurchased}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                <label htmlFor="quanity">
                    Quantity 
                    <span id="styleRequired">*</span>
                </label>
                <div className="row">
                    <div className="quanity">
                    <input
                        type="number"
                        min="1"
                        max="9999"
                        step="1"
                        className="form-control"
                        id="quanity"
                        name="quanity"
                        required
                        value={this.state.quanity}
                        onChange={this.handleInputChange} />
                    </div>
                </div>
                </div>

                <hr />

                <button type="submit">Add to list</button>
                <button type="reset">Cancel</button>
      </form>
        )
    }
}

export default AddItem;