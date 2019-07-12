import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import HotShelf from '../components/HotShelf';
import ColdShelf from '../components/ColdShelf';
import FrozenShelf from '../components/FrozenShelf';
import OverflowShelf from '../components/OverflowShelf';

const mapStateToProps = state => {
   return {
      activeOrders: state.activeOrders
   }
}

const mapDispatchToProps = dispatch => {
   return {
      
   }
}

class Shelves extends PureComponent {

  render() {
    return (
      <div>
         <Grid>
            <Grid.Row>
               <Grid.Column width={4}>
                  <HotShelf/>
               </Grid.Column>
               <Grid.Column width={4}>
                  <ColdShelf/>
               </Grid.Column>
               <Grid.Column width={4}>
                  <FrozenShelf/>
               </Grid.Column>
               <Grid.Column width={4}>
                  <OverflowShelf/>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);