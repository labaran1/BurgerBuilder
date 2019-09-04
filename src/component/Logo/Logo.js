import React from 'react';
import  burgerLogo from '../../assets/images/133 burger-logo.png';
import classes from './Logo.css'





const logo = (props)=>(

<div className={classes.Logo}>
    <img src={burgerLogo} atl="MyBurger"/>
</div>


);



export default logo;