import React, { Component } from 'react';
import Navbar from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

class Layout extends Component {

    render() {
        return (
            <>
                <Navbar />
                <Banner />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Layout;