
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';

//import React, { Component } from "react";

// Parent Component [Root Component] 
// Stateless component [functional component]
function App() {
    return ( 
        <div>
            <Hello name="Rob" />
            <Counter />
        </div>
    );
}

export default App;
