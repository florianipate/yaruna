import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

const TopNav = () =>{
    <Fragment>
        <div className="top-navigation">
            <Link className="logo-container" to='/'>Logo</Link>
            <Link className="nav-container" to='/shop'>Shop</Link>

        </div>
        <Outlet />
    </Fragment>
};

export default TopNav;