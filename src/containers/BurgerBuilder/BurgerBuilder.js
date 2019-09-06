import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../component/Burger/Burger';
import BuiltControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import axios from '../../Axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
    salad:0.4,
    bacon: 4,
    cheese:0.4,
    meat:1.7
}
class BurgerBuilder extends Component{
 

   state= {

        ingredients: {

            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    purchaseHandler =()=>{
        this.setState({purchasing:true})

    }
purchaseCancelHandler =()=>{

this.setState({purchasing:false});

}

purchaseContinueHandler = ()=>{

    // alert('you Continue')
    this.setState({loading: true});
    const order ={
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
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
        this.setState({ loading: false, purchasing: false })
    })
    .catch(error => {
        this.setState({loading:false,  purchasing: false})
    });

}





    updatePurchaseState (ingredients){
     
        const sum = Object.keys(ingredients)
            .map( igkey => {
                return ingredients[igkey];
            })
            .reduce(( sum , el)=>{
                return sum + el;
            }, 0);
            this.setState({purchasable: sum>0});
    }









    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const  updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
         this.setState({totalPrice: newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientHandler = (type) =>{
const oldCount = this.state.ingredients[type];
if(oldCount <= 0){
    return;
}
const updatedCount = oldCount -1 ;
const updatedIngredients = {
    ...this.state.ingredients

}
updatedIngredients[type]= updatedCount;
const priceDeduction = INGREDIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice- priceDeduction;
this.setState({totalPrice:newPrice, ingredients:updatedIngredients})

this.updatePurchaseState(updatedIngredients);
    }



render(){

    const disableInfo = {
        ...this.state.ingredients
    }
    for (let key in disableInfo){
     disableInfo[key]= disableInfo[key] <=0;
// {salad: true, meat: false}
    }
    let orderSummary = <OrderSummary
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.state.ingredients} />

        if(this.state.loading){
            orderSummary = <Spinner/>
        }



    return  (
        <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
       {orderSummary}
        </Modal>

          
        <Burger ingredients={this.state.ingredients}/>
        <BuiltControls
        ordered={this.purchaseHandler}
        purchasable={this.state.purchasable}
        price={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}

        />
        </Aux>
    )
}





}



export default BurgerBuilder;