import "./App.css";
import ToDo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = [
    "Bappa Raj",
    "Omar Sunny",
    "Salman Shah",
    "Jasim",
    "Anwar",
    "Rajjak",
  ];

  const singers = [
    { id: 1, name: "Dr. Mahfuz", age: 68 },
    { id: 2, name: "Mila", age: 30 },
    { id: 3, name: "Ayub Bachchu", age: 55 },
  ];
  // const time = 50;
  return (
    <>
      <h1>React Core Concepts</h1>

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))}

      {/* {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))} */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Learn JS" isDone={false}></ToDo>
      <ToDo task="Learn Python" isDone={true}></ToDo> */}
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mojumder" tech="Javascript"></Developer>
      <Developer name="Halim" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Device brand="Nokia" price="14000"></Device>
      <Device brand="Xaomi"></Device> */}
    </>
  );
}

// const { brand, price } = { brand: "Nokia", price: "14000" };
function Device({ brand, price = 20000 }) {
  return (
    <div className="student">
      <p>Brand:{brand} </p>
      <p>Price:{price} </p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}

function Person() {
  const age = 17;
  const name = "Jolil";
  const personStyle = {
    color: "red",
  };
  return (
    <p style={personStyle}>
      I am a person: {name} {age}
    </p>
  );
}

function Developer(props) {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Name:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  );
}

export default App;
