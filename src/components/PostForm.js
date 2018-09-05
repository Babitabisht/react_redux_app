import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  onSubmit = e => {
    console.log("hello");
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <p> Add Form </p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="Title">Title :</label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="Body">Body :</label> <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(PostForm);
