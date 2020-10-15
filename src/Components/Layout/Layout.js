import React, { Component } from 'react';
import Navbar from '../Header/Header';
import Footer from '../Footer/Footer';

class Layout extends Component {

    render() {
        return (
            <>
                <Navbar />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Layout;