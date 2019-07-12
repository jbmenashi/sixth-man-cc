import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Order from './Order';

const mapStateToProps = state => {
   return {
      coldShelf: state.coldShelf
   }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class ColdShelf extends PureComponent {

  render() {
    return (
      <div>
         <h1>Cold Shelf</h1>
         {this.props.coldShelf.map(order => <Order {...order} key={order.id}/>)}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ColdShelf);