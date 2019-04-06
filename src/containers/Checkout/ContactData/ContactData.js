import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mak Irwin',
                address: {
                    street: 'Hmm St.',
                    zipCode: 'XxX XxX',
                    country: 'Canada'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }

        // .json is just for firebase
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false});
            });
    
  }

  render() {
    let form = (
      <form>
        <Input inputtype='input' type='text' name='name' placeholder='Name'></Input>
        <Input inputtype='input' type='email' name='email' placeholder='Email'></Input>
        <Input inputtype='input' type='text' name='street' placeholder='Street'></Input>
        <Input inputtype='input' type='text' name='postalCode' placeholder='Postal Code'></Input>
        <Button btnType='Success' clicked={this.orderHandler}>Place Order</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner/>;
    }

    return(
      <div className={classes.ContactData}>
        <h3>Enter your information.</h3>
        {form}
      </div>
    );
  }
}

export default ContactData;