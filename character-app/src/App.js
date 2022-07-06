import React from "react";
import Header from "./Header";
// import PartList from "./PartList";
// import Character from "./Character";
import "./App.css";
import PartListNode from "./PartlistNode";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <PartList /> */}
      <PartListNode />
      {/* <Character /> */}
    </div>
  );
}

export default App;
