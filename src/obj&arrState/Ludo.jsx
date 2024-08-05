import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({ blue: 0, green: 0 });
  let [record, setRecord] = useState(["no record"]);

  const updateMoves = (color) => {
    console.log(color);
    if (color === "blue") {
      setMoves({ ...moves, blue: moves.blue + 1 }); // we have to use spread operator to update the state in object because react wont recognize the change in object so we have to make a copy using spread operator
    } else {
      setMoves({ ...moves, green: moves.green + 1 });
    }
    setRecord([...record, `Move made by ${color}`]); //same for array
  };

  const handleBlueClick = () => {
    updateMoves("blue");
  };

  return (
    <>
      <div className="cont">
        <h1>{record.join("--")}</h1>
        <h3>Blue: {moves.blue}</h3>
        <button onClick={handleBlueClick}>Blue</button>
        <br />
        <h3>Green: {moves.green}</h3>
        <button onClick={() => updateMoves("green")}>Green</button>
      </div>
    </>
  );
}
