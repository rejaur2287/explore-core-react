import "./App.css";

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
    </>
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
  const personStyle = {};
  return (
    <p>
      I am a person: {name} {age}
    </p>
  );
}

export default App;
