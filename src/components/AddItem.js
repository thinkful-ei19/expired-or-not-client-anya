import React from 'react';
import './AddItem.css';

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

    render() {
        return(
            <form className="column">
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
                    /*value={itemName}*/ />
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
                    /*value={datePurchased}*/ />
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
                        /*value={quanity}*/ />
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