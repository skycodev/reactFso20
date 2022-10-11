import React from "react";
import ReactDOM from "react-dom";

import Total from "./components/Total";
import Header from "./components/Header";
import Content from './components/Content'

const course = {
  name: "Half Stack application development",

  parts :[ {
    name:"Fundamentals of React",
    exercises: 10
  },

  {
    name:"Using props to pass data",
    exercises: 7
  },

  {
    name:"State of a component",
    exercises: 17
  }
  ]
}

const App = () => {

  return (
    <div>
      <Header course = {course} />    
    
      <Content parts = {course.parts}  />
  
      <Total parts = {course.parts}/>      
    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
