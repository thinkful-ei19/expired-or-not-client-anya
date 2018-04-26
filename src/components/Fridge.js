import React from 'react';
import FridgeHeader from './FridgeHeader';
import Item from './Item';
import EmptyList from './EmptyList';

class Fridge extends React.Component {

    
    createListItemElements(items) {
        const {removeItem} = this.props;
    
        return (
          Object
          .values(items)
          .map(item => {
            return (<Item item={item} removeItem={removeItem} key={item.id} />);
          })
          .reverse()
        );
      }

    render() {
        return(
            <div className="column">
                <h3 className="page-header">

                <FridgeHeader 
                />

                </h3>
                <ul>


                </ul>
            </div>
        );
    }
}
export default Fridge;