import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home </Link>
                    <Link to="/" className="navbar-brand">NEWS</Link>
                    <Link to="/search" className="navbar-brand">Search </Link>
                </div>
            </nav>
        )
    }
}

export default Header;