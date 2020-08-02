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

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "20px 0 0 0" }}>
          <span className={this.getBadgeClasses()} style={this.styles}>
            {this.formatCount()}{" "}
          </span>

          {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
          {/* {this.renderTags()} */}

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
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
