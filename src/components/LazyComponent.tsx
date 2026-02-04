import React from "react";

function LazyComponent() {
  return (
    <div className="p-4 mt-4 bg-green-200 rounded">
      <h2 className="font-semibold">Lazy Loaded Component</h2>
      <p>This component is loaded on demand.</p>
    </div>
  );
}

export default LazyComponent;
