import React, { useEffect, useState } from "react";

const TableValue = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const text = props.text;
    const pattern = props.pattern;

    setValue(props.handleFunction(text, pattern));
    console.log(text, pattern)
  }, [props]);

  return <div {...props}>{value}</div>;
};

export default TableValue;
