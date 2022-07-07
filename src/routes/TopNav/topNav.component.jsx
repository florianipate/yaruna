import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

const TopNav = () =>{

    return(
        <Fragment>
            <div className="top-navigation">
                <div><Link className="logo-container" to='/'>Logo</Link></div>
                <div><Link className="nav-container" to='/shop'>Shop</Link></div>
            </div>
            <Outlet />
        </Fragment>
    );  
};

export default TopNav;