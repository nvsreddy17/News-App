import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <nav className="page-footer text-center text-white bg-dark fixed-bottom">
                <div className="container-fluid">
                    <span>React App for News Headlines</span>
                    <br />
                    <span>Copyright @2021-22</span>
                </div>
            </nav>
        )
    }
}

export default Footer;