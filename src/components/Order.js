import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      orderId: state.orderId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class Order extends PureComponent {

  render() {
      return (
         <div className="order">
            <h4>{this.props.name}</h4>
            <h6>Value: {this.props.value}</h6>
            <h6>Delivery Time: {this.props.delTime}</h6>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);