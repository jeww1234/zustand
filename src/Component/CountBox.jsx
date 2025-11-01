import React from "react";
import countStore from "../Store/Count2";

const CountBox = () => {
  const { count } = countStore();
  return (
    <div>
      <h2>count:{count}</h2>
    </div>
  );
};

export default CountBox;
