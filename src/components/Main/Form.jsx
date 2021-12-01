import React from "react";

const Input = (props) => {
  const loadFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const textContent = document.getElementById('input-text')

      textContent.innerText = reader.result
    };
  };

  return (
    <div className="form">
      <div className="form__content">
        <label className="form__label">Text</label>
        <textarea
          className="form__input"
          id="input-text"
          name="text"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="form__content pattern__content">
        <label className="form__label">Pattern</label>
        <textarea
          className="form__input pattern__input"
          id="input-pattern"
          name="pattern"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="main__buttons">
        <input type="file" className="form__file" onChange={loadFile} />
        <button
          className="form__button"
          href="#"
          type="button"
          onClick={props.handleData}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Input;
