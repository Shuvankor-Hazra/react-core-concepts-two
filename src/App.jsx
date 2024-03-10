import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked 1");
  }

  const handleClick2 = () => {
    alert("Button Clicked 2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core Concept (Two)</h1>

      <Friends></Friends><hr />

      <Users></Users><hr />

      <Team></Team><hr />

      <Counter></Counter><hr />

      <button onClick={handleClick}>Click 1</button><hr />
      <button onClick={handleClick2}>Click 2</button><hr />
      <button onClick={() => {alert("Button Clicked 3")}}>Click 3</button><hr />
      <button onClick={() => {addToFive(3)}}>Click 4</button><hr />
    </>
  );
}

export default App;
