import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <a href=""><img src="" alt=""/></a>
                    </div>
                </div>
                <div className="menu">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Shop page</a></li>
                            <li><a href="#">Single product</a></li>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Others</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}