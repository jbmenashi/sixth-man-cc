import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Order from './Order'

const mapStateToProps = state => {
   return {
      hotShelf: state.hotShelf
   }
}

const mapDispatchToProps = dispatch => {
   return {
      
   }
}

class HotShelf extends PureComponent {

   render() {
      return (
         <div>
            <h1>Hot Shelf</h1>
            {this.props.hotShelf.map(order => <Order {...order} key={order.id}/>)}
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotShelf);