import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
    
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    
        const { item, removeListItem } = this.props;
        //const itemId = item.id;
    
        removeListItem(item);
      }

    render() {
        console.log('this.props',this.props);
        const {item} = this.props;

        return (
            <div className="panel">
              <div className="panel-heading">
                {item.quantity} x {item.name}
              </div>
      
              {item.datePurchased}
      
              <div className="panel-footer">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <button type="submit">Remove</button>
                </form>
              </div>
            </div>
          );
    }
}

export default Item;