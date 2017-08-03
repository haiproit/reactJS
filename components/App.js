import React from "react";

function Comment() {
    return (
        <div className="main">
            <div className="container">
                <ul className="row">
                    <li className="col">
                        <a href="#">
                            <img src="./images/item.jpg" alt=""/>
                            <span className="name">A</span>
                        </a>
                    </li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                    <li className="col"><a href="#"><img src="./images/item.jpg" alt=""/></a></li>
                </ul>
            </div>
        </div>
    );
}

export default class App extends React.Component {
    render() {
        return (
            <Comment />
        )
    };
}