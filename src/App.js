import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';

// added these like told in the class. i have a feeling this isn't correct
// error started showing Line 0:  Parsing error: Invalid array length after added.
</Navbar>
<Directory />

// when navbar and directory removed the following error shows. even if directory isnt called.
//./src/components/DirectoryComponent.js Line 52:19:  Parsing error: Unterminated JSX contents

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
            </div>
        );
    }
}
 
export default App;