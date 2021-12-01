import React, { useState, useEffect } from "react";
import Table from "./Main/Table";
import Form from "./Main/Form";

const Main = () => {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");

  const handleData = () => {
    const patternValue = document.getElementById("input-pattern").value;
    const textValue = document.getElementById("input-text").value;

    setPattern(patternValue);
    setText(textValue);
  };

  return (
    <main className="main">
      <Form text={text} pattern={pattern} handleData={handleData} />
      <Table text={text} pattern={pattern} />
    </main>
  );
};

export default Main;
