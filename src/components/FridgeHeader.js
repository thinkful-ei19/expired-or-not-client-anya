import React from 'react';

class FridgeHeader extends React.Component {
    constructor() {
        super();

    }

    render() {
        const { totalNumberOfListItems } = this.props;
    
        if (totalNumberOfListItems > 0) {
          return (
            <form onSubmit={this.handleSubmit} className="form-inline">
              {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
              {' '}
              <button type="submit">Remove all</button>
            </form>
          );
        }
    
        return (<span>Shopping List</span>);
      }
}

export default FridgeHeader;