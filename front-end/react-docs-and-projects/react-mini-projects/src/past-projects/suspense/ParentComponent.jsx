// ParentComponent.js
import { Suspense } from "react";
import AsyncComponent from "./AsyncComponent";

const ParentComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncComponent />
    </Suspense>
  );
};

export default ParentComponent;
