import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NaviagationItem/NavigationItem';

const navigationItems = (props)=> (

    <ul className={classes.NavigationItems}>
      <NavigationItem  link='/' >BurgerBuilder </NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>

)



export default navigationItems;