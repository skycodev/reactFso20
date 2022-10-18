import Course from './components/Course'

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
  },
  {
    name:"State of a component II",
    exercises: 1
  }
  ]
}
const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

const App = () => {

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses}/>
    </div>
  
  );
};

export default App