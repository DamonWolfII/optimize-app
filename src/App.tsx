import React, { Suspense, useCallback, useState } from "react";
import Counter from "./components/Counter";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import { Button } from "./components/ui/button";

const LazyComponent = React.lazy(() => import("./components/LazyComponent"));
function App() {
  const [count, SetCount] = useState(0);
  const [showLazy, setShowLazy] = useState(false);
   
  const increment = useCallback(() => {
    SetCount((prev) => prev + 1);
  }, []);
  return (
    <div className="">
      <h1>React Performance Optimization</h1>
      <Counter count={count} onIncrement={increment} />
      <ExpensiveCalculation number={count || 1} />
      <Button onClick={() => setShowLazy((prev) => !prev)}>
        Toggle Lazy Component
      </Button>
      {showLazy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
