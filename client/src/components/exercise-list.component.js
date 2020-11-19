import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5001/exercises/").then((response) => {
      this.setState({ exercises: response.data });
    });
  }
  render() {
    return (
      <div>
        <p>Exercise List Component</p>
      </div>
    );
  }
}
