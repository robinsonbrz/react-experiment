import React, { Component } from "react";


function Hello(props){
    return(
        <h1> { props.name }</h1>
    )



}



/*

class Hello extends React.Component {
    render(){
        <h1>Hello { this.props.name }</h1>
    }
}
*/

export default Hello;