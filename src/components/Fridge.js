import React from 'react';
import FridgeHeader from './FridgeHeader';
import Item from './Item';
import EmptyList from './EmptyList';
import {connect} from 'react-redux';
import {removeListItem, removeAllListItems} from '../actions';

class Fridge extends React.Component {
    constructor(props) {
        super(props)
        this.createListItemElements = this.createListItemElements.bind(this);
        this.getTotalNumberOfListItems = this.getTotalNumberOfListItems.bind(this);
    }
    getTotalNumberOfListItems() {
        const { listItems } = this.props;
    
        return Object.values(listItems).length
      }

    createListItemElements(listItems) {
        console.log('this.props',this.props);
        const {removeListItem} = this.props;
    
        return Object.values(listItems).map(item => {
            return (<Item item={item} removeListItem={removeListItem} key={item.id} />);
          })
          .reverse()

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

const mapStateToProps = (state) => ({
    listItems: state.items
})

const mapDispatchToProps = (dispatch) => ({
    removeListItem: (item) => dispatch(removeListItem(item)),
    removeAllListItems: () => dispatch(removeAllListItems())
})

export default connect (mapStateToProps, mapDispatchToProps)(Fridge);