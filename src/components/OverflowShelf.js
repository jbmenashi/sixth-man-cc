import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Order from './Order';

const mapStateToProps = state => {
   return {
      overflowShelf: state.overflowShelf
   }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class OverflowShelf extends PureComponent {

  render() {
    return (
      <div>
         <h1>OverFlow Shelf</h1>
         {this.props.overflowShelf.map(order => <Order {...order} key={order.id}/>)}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OverflowShelf);