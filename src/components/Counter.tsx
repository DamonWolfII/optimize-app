import React from "react";
import { Button } from "./ui/button";

interface Props {
  count: number;
  onIncrement: () => void;
}

function Counter({ count, onIncrement }: Props) {
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={onIncrement}>Increment</Button>
    </div>
  );
}

export default React.memo(Counter);
