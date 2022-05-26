import React, {
    Component
} from "react";

// Secon syntax : class based component

class Hello extends React.Component {
    render() {
        return (
            <h1> Hello { this.props.name } </h1>
        )
    }
}







/*
functional com props
function Hello(props){
    return(
        <h1> { props.name }</h1>
    )
}
*/

/*

class Hello extends React.Component {
    render(){
        <h1>Hello { this.props.name }</h1>
    }
}
*/

export default Hello;