import React from 'react';
import uuid from 'uuid';
import './AddItem.css';
import {connect} from 'react-redux';
import {addListItem} from '../actions';

class AddItem extends React.Component {
    constructor() {
        super();

        this.state = {
            itemName: '',
            datePurchased: '',
            //expTime: '',
            quantity: 0
          };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
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
            quantity
        } = this.state;

        const listItem = {
            date: new Date(),
            name: itemName.trim(),
            datePurchased: datePurchased.trim(),
            quantity: parseInt(quantity, 10),
            id: uuid()
        };

        //actions are objects, action creator is a function!!!
        this.props.dispatch(addListItem(listItem));

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
                <label htmlFor="quantity">
                    Quantity 
                    <span id="styleRequired">*</span>
                </label>
                <div className="row">
                    <div className="quantity">
                    <input
                        type="number"
                        min="1"
                        max="9999"
                        step="1"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        required
                        value={this.state.quantity}
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

const mapDispatchToProps = (dispatch) => ({
    addItem: (listItem) => dispatch(addListItem(listItem.name)),
    dispatch, //to call it inline
})

export default connect(null, mapDispatchToProps)(AddItem);