import React, { Component } from 'react';
import "./style.css";

import TopNavBar from "../../components/TopNavBar/index";
import Cards from "../../components/Cards";

class Main extends Component {

    render() {
        return (
            <>
                <TopNavBar />
                <Cards />
            </>
        );
    }
}

export default Main;