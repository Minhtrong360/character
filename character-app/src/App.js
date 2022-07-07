import React from "react";
import Header from "./Components/Header";
import PartList from "./Components/PartList";
// import Character from "./Character";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <PartList />
      {/* <Character /> */}
    </div>
  );
}

export default App;
