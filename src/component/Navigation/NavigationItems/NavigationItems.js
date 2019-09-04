import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NaviagationItem/NavigationItem';

const navigationItems = (props)=> (

    <ul className={classes.NavigationItems}>
      <NavigationItem  link='/' active>BurgerBuilder </NavigationItem>
      <NavigationItem link='/'>CheckOut</NavigationItem>
    </ul>

)



export default navigationItems;