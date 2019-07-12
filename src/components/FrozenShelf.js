import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Order from './Order';

const mapStateToProps = state => {
   return {
      frozenShelf: state.frozenShelf
   }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class FrozenShelf extends PureComponent {

  render() {
    return (
      <div>
         <h1>Frozen Shelf</h1>
         {this.props.frozenShelf.map(order => <Order {...order} key={order.id}/>)}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenShelf);