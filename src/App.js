import React, { useState } from "react";
import "./App.scss";
import Header from "./containers/Header/Header";
import Section from "./Sections/Section";
import Footer from "./containers/Footer/Footer";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} />
      <Section onChangeScore={(n) => setScore(score + n)} />
      <Footer />
    </div>
  );
}

export default App;
