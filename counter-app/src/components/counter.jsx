import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imgUrl: "https://picsum.photos/id/237/200/300",
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // adddress: {
  //   //   street: "",
  //   // },
  // };

  // constructor() {
  //   super();
  //   console.log("constructor called", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  /**
  * Warning: This lifecycle is currently deprecated, and will be removed in React version 17+
  More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
  */
  componentWillUnmount(nextProps, nextState) {
    console.log("Counter - componentWillUnmount");
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    const { counter } = this.props;
    return (
      <React.Fragment>
        <div style={{ padding: "20px 0 0 0" }} className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()} style={this.styles}>
              {this.formatCount()}{" "}
            </span>
          </div>
          {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
          {/* {this.renderTags()} */}

          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              {" "}
              +{" "}
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm  m-2"
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // handleIncrement = () => {
  //   // console.log("increament clicked");
  //   // console.log(this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p> There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}> {tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
