import React, { Component } from 'react'
import Button from '../../../component/UI/Button/Button';

import Spinner from '../../../component/UI/Spinner/Spinner';

import classes from './ContactData.css';
import axios from '../../../Axios-orders';
import Input from '../../../component/UI/Input/Input';

 class ContactData extends Component {
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        },
        loading:false
    }

orderHandler = (event)=>{
  event.preventDefault();

    // alert('you Continue')
    this.setState({loading: true});
    const order ={
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
            name: 'Labaran Labs',

            address:{
            street: 'Meow',
            zipCode: '724560',
            country: 'Ghana'
            },

            email: 'meow@meow.com'

        } ,
        deliveryMethod:'fastest'

    }
    axios.post('/orders.json', order)
    .then(response => {
        this.setState({ loading: false});
        this.props.history.push('/');
    })
    .catch(error => {
        this.setState({loading:false  })
    });

}




  render() {
    let form = (
      <form>
        <Input inputType="input" type='text' name="name" placeholder="Your Name" />
        <Input inputType="input" type='email' name="email" placeholder="Your Mail" />
        <Input inputType="input" type='text' name="street" placeholder="Street" />
        <Input inputType="input" type='text' name="postal" placeholder="Postal Code" />

        <Button btnType='Success' clicked={this.orderHandler}> ORDER</Button>

      </form>

    );
    if (this.state.loading){
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
      <h4> Enter your Contact DAta</h4>
      {form}

      </div>
    )
  }
}



export default ContactData;