import React, { Component } from 'react';

export default class SearchResultItems extends Component{
  render(){
    const { name } = this.props;
    const { email } = this.props;
    return(
      <div style={{ backgroundColor: "#E8E7E7", marginTop: 5, marginBottom: 5, padding: 10, width: "100%" }}>
	<p>{name}</p>
	<p>{email}</p>
      </div>
    );
  }
}
