import React from 'react'
// import PropTypes from 'prop-types'
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const Layout = (props) =>(
<Aux>

 <div> Toolbar, SideDrawer, Backdrop</div>
<main className={classes.Content}>
    {props.children}

</main>


</Aux>
)




// Layout.propTypes = {

// }

export default Layout

