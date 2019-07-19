import React, { Component } from "react";
import "./App.css";
import teamLogo from "./assets/team-int.png";
import Grade from "./components/grade";
import { getResult } from "./utils/grades-utils";

class App extends Component {
  state = {
    grades: [
      { id: 1, value: 0, weight: 0 },
      { id: 2, value: 0, weight: 0 },
      { id: 3, value: 0, weight: 0 },
      { id: 4, value: 0, weight: 0 }
    ],
    result: 0
  }

  findOut = () => {
    const { grades } = this.state;

    const areGradesValid = grades.find(({ value, weight}) => this.validateValue(value) && this.validateWeight(weight));
    if (areGradesValid) {
      const result = getResult(grades) || 0;
      this.setState({
        result
      })
    }
    
  }

  validateValue = (value) => {
    if (parseFloat(value) || parseFloat(value) === 0) {
      return true;
    }
    return false;
  }

  validateWeight = (weight) => {
    if (parseInt(weight) || parseInt(weight) === 0) {
      return true;
    }
    return false;
  }

  changeGrade = (e, key, id) => {
    let value = e.target.value;

    this.setState(({ grades }) => ({
      grades: grades.map(grade => grade.id === id ? { ...grade, [key]: value } : grade)
    }))
  }

  render() {
    const { grades, result } = this.state;
    return (
      <div className="App">
        <img src={teamLogo} className="team-logo" alt=""/>

        <div className="header">
          <h1>Final grade Calculator</h1>
          <span className="pray-icon" role="img" aria-label="pray">🙏</span>
        </div>

        <div className="grades-container">
          <div className="grades-titles">
            <p>Value</p>
            <p>weight %</p>
          </div>
          {grades.map(grade => (
            <Grade
              onChange={this.changeGrade}
              key={grade.id}
              {...grade}
            />
          ))}
        </div>
        <div className="result-container">
          <div className="result-wrapper">
            {/* {<h2 className="result">{result}</h2>} */}
            {!!result && (result !== 0 )&& <h2 className="result">{result}</h2>}
          </div>
          <button className="find-out" onClick={this.findOut}>Find out!</button>
        </div>
      </div>
    );
  }
}

export default App;
