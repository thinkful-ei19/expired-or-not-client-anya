import React from 'react';

class FridgeHeader extends React.Component {

    // alternative to using bind in constructor if we use arrow function
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.removeAllListItems()
    }

    render() {
        const { totalNumberOfListItems } = this.props;
    console.log('here',this.props);
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