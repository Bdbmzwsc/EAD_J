import logo from './logo.svg';
import React from "react";
import './App.css';
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'
import { decode as base64_decode, encode as base64_encode } from 'base-64';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    input = (e) => {
        
   //    let Key2 = Base64.stringify(Utf8.parse(this.refs.textbox.value));.
        try {
            let en = base64_encode(this.refs.textbox.value);
            alert(en);
        }
        catch (err) {
            alert("Chinese encryption is not supported in this version");
        }
       
    }

    ai = (e) => {//Kai意味解密，不要问我为什么要加个(e)
        try {//加个try防止输入的是非base64
            let kai = base64_decode(this.refs.textbox.value);
            alert(kai);
        }
        catch (error) {
            alert("Please enter Base64 encrypted string.");
        }
        
    }
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Nice to meet you</h1>
                <h1>Welcome to the EADJ</h1>
                <p>It's a Entryption and Detryption Program</p>
                <p>And I use the react write it</p>
                <p>The current encryption method is inconsistent with the Android version</p>
                <div>
                    <input type="text" ref="textbox"  />
                    <button onClick={ this.input}>Entryption</button>
                    <button onClick={ this.ai}>Detryption</button>
                </div>
            </header>

        );
    }
}
class inputclick extends React.Component {
    constructor(props) {
        super(props);
    }
    input = (e) => {
        if (e.keyCode === 13) {
            console.log(this.refs.textbox.value)
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref="textbox" onKeyUp={this.input} />
            </div>

        );
    }
}


export default App;
