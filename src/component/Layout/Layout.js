import React from 'react'
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';

const Layout = (props) =>(
<Aux>

<Toolbar/>
 {/* <div> Toolbar, SideDrawer, Backdrop</div> */}
<main className={classes.Content}>
    {props.children}

</main>


</Aux>
)




// Layout.propTypes = {

// }

export default Layout
