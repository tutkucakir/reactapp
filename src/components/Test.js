import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }
    componentDidMount()
    {
        console.log("componenDidMount");
        //Api İstekleri
        this.setState({
            a:20
        })
    }

    componentDidUpdate = (prepProps, prevState) =>
    {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate()
    {
        console.log("Should Component Update");
        return false; //Renderın güncellenmesini engelleyecek
    }


  render() {
      console.log("Render");
    return (
      <div></div>
    )
  }
}


export default Test;