import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <>
      <div className="container mt-5 ">
        <div className="jumbotron">
          <h1 className="display-3"> heading</h1>
          <p className="lead">Jumbo helper text</p>
          <hr className="my-2" />
          <p>More info</p>      
        </div>
      </div>
    </>
    )
  }
}

