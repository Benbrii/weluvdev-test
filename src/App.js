import React, { Component } from 'react';
import { connect } from "react-redux";
import "./App.css";

import { getJobs } from "./actions/jobs.action";

import TopNavBar from "./components/TopNavBar";

class ConnectedApp extends Component {

  componentDidMount() {
    this.props.getJobs();
  }

  render() {

    return (
      <div className="page">
        <TopNavBar />

      </div>
    );
  }
}

const mstp = state => {
  return {
    jobs: state.jobsInfo.jobs
  }
}

const mdtp = dispatch => ({
  getJobs: () => dispatch(getJobs())
})

const App = connect(
  mstp,
  mdtp
)(ConnectedApp)

export default App;