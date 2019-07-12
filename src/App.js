import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import './App.css';
import Shelves from './containers/Shelves'

const mapStateToProps = state => {
  return {
      orders: state.orders,
      activeOrders: state.activeOrders,
      orderId: state.orderId,
      hotShelf: state.hotShelf,
      coldShelf: state.coldShelf,
      frozenShelf: state.frozenShelf,
      overflowShelf: state.overflowShelf,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeOrder: (order, id, delTime, value) => dispatch({type: "MAKE_ORDER", payload: order, id: id, delTime: delTime, value: value}),
    addToHotShelf: (order) => dispatch({type: "ADD_TO_HOT_SHELF", payload: order}),
    addToColdShelf: (order) => dispatch({type: "ADD_TO_COLD_SHELF", payload: order}),
    addToFrozenShelf: (order) => dispatch({type: "ADD_TO_FROZEN_SHELF", payload: order}),
    addToOverflowShelf: (order) => dispatch({type: "ADD_TO_OVERFLOW_SHELF", payload: order})
  }
}

class App extends Component {
   start = () => setInterval(() => this.makeOrderAndSetShelf(this.props.orders[Math.floor(Math.random() * this.props.orders.length)], this.props.orderId, Math.floor(Math.random() * 9) + 2), 1000)

   makeOrderAndSetShelf = (order, id, delTime) => {
      if (this.props.overflowShelf.length < 20 || this.props.hotShelf.length < 15 || this.props.coldShelf.length < 15 || this.props.frozenShelf.length < 15) {
         this.props.makeOrder(order, id, delTime, order.shelfLife)
         if (order.temp === "hot") {
            this.props.hotShelf.length < 15 ? this.props.addToHotShelf(order) : this.props.addToOverflowShelf(order)
         }
         else if (order.temp === "cold") {
            this.props.coldShelf.length < 15 ? this.props.addToColdShelf(order) : this.props.addToOverflowShelf(order)
         }
         else if (order.temp === "frozen") {
            this.props.frozenShelf.length < 15 ? this.props.addToFrozenShelf(order) : this.props.addToOverflowShelf(order)
         }
      }
   }

   render() {
      // console.log("hotshelf", this.props.hotShelf.length, "coldshelf", this.props.coldShelf.length, "frozen", this.props.frozenShelf.length, "overflow", this.props.overflowShelf.length)
      return (
         <div className="App">
            <h1>Sixth Man Deliveries</h1>
            <Button onClick={() => this.start()}>Start!</Button>
            <Shelves/>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
