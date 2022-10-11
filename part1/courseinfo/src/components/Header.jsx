const Header = props => {
  const {name} = props.course
  console.log(name)
  return <h1>{name}</h1>;
};

export default Header