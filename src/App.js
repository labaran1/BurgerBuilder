import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';


import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
render(){
  return(
<Layout>
  <Switch>
<Route  exact path="/" component={BurgerBuilder}/>
<Route path='/orders' component={Orders}/>
<Route path="/checkout" component={Checkout} />
      </Switch>
</Layout>


  )

}


}

export default App;
