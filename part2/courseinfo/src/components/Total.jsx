const Total = ({parts}) => {
  return (
    <strong>      
        Number of exercises{" "}
        {parts.reduce((s,p) => s + p.exercises,0)}      
    </strong>
  );
};  

export default Total