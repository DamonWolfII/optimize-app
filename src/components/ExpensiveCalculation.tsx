import React, { useMemo } from "react";

interface Props {
  number: number;
}

function ExpensiveCalculation({ number }: Props) {
  const result = useMemo(() => {
    console.log("Expensive Calculation Running...");
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i % number;
    }
    return total;
  }, [number]);
  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
}

export default ExpensiveCalculation;
