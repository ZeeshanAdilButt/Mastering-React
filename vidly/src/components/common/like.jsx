import React, { Component } from "react";

//Inpute: liked: boolean
// Output: onClick

class Like extends Component {
  state = {};
  render() {
    let classes = "fa fa-heart";

    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
