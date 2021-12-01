import React from "react";
import TableValue from "./TableValue";
import { KMP } from "../../utils/pattern-matching/KMP";
import { BoyerMoore } from "../../utils/pattern-matching/BoyerMoore";
import { BruteForce } from "../../utils/pattern-matching/BruteForce";

const Table = (props) => {
  return (
    <div className="table">
      <div className="table__header">Algoritmo</div>
      <div className="table__header">
        Tiempo de Ejecución
        <br />
        (ms)
      </div>
      <div className="table__header">Ocurrencias</div>
      <div className="table__header">
        Nombre del
        <br />
        Dueño
      </div>
      <div className="table__header">Brute Force</div>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="time-bf"
        handleFunction={BruteForce}
      >
        Brute Force
      </TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="occurrences-bf"
        handleFunction={BruteForce}
      >
        Brute Force
      </TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="name-bf"
        handleFunction={BruteForce}
      >
        Brute Force
      </TableValue>
      <div className="table__header">KMP</div>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="time-kmp"
        handleFunction={KMP}
      ></TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="occurrences-kmp"
        handleFunction={KMP}
      ></TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="name-kmp"
        handleFunction={KMP}
      ></TableValue>
      <div className="table__header">Boyer - Moore</div>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="time-bm"
        handleFunction={BoyerMoore}
      ></TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="occurrences-bm"
        handleFunction={BoyerMoore}
      ></TableValue>
      <TableValue
        text={props.text}
        pattern={props.pattern}
        className="table__data"
        id="name-bm"
        handleFunction={BoyerMoore}
      ></TableValue>
    </div>
  );
};

export default Table;
