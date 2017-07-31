import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a href=""><img src="" alt=""/></a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Deal</a></li>
                        <li><a href="">Khuyen mai</a></li>
                    </ul>
                </div>
            </div>
    );
    }
}