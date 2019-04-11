import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
  checkoutConfirmHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }
  
  render() {
    return(
      <div>
        <CheckoutSummary 
          ingredients={this.props.ings}
          checkoutConfirm={this.checkoutConfirmHandler} 
          checkoutCancel={this.checkoutCancelHandler} 
        />
        <Route 
          path={this.props.match.url + '/contact-data'} 
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
  };
}

export default connect(mapStateToProps)(Checkout);