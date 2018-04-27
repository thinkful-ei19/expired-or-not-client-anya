import React from 'react';
import FridgeHeader from './FridgeHeader';
import Item from './Item';
import EmptyList from './EmptyList';

class Fridge extends React.Component {

    getTotalNumberOfListItems() {
        const { listItems } = this.props;
    
        return Object.values(listItems).reduce((total, item) => (
          total + item.quantity
        ), 0);
      }

    createListItemElements(listItems) {
        console.log('this.props',this.props);
        const {removeListItem} = this.props;
    
        return (
          Object.values(listItems).map(item => {
            return (<Item item={item} removeListItem={removeListItem} key={item.id} />);
          })
          .reverse()
        );
      }

    render() {

        const { listItems, removeAllListItems } = this.props;
        const listItemElements = this.createListItemElements(listItems);

        return(
            <div className="column">
                <h3 className="page-header">

                <FridgeHeader 
                    totalNumberOfListItems={this.getTotalNumberOfListItems(listItems)}
                    removeAllListItems={removeAllListItems}
                />

                </h3>
                <ul>
                    {listItemElements.length > 0 ? listItemElements : <EmptyList />}
                </ul>
            </div>
        );
    }
}
export default Fridge;