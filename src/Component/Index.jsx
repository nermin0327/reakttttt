import React, { Component } from 'react'
class Index extends Component {
    state = {
      text: "Subscribe",
      subscribed: false

    };
   
    render() {
     
      const { text } = this.state;
      return (
        <button type="button">
          {text}
        </button>
      );
    }
   }
   console.log ('click')
   export default Index