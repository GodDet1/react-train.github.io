import React, { useState } from "react";

const Change = () => {
  const [value, setValue] = useState("Text");

  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
};

export default Change;
