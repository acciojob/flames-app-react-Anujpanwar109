import React, {Component, useState} from "react";
import '../styles/App.css';
import Xx from "./Xx";


class App extends Component {
    render() {

        return(
            <div id="main">
            <Xx/>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
