import * as React from "react";
import RevealJS from "../components/reveal-js";

const TestPage = () => {
  return (
    <article>
      <h1>Test</h1>
      <RevealJS>
        <p>child</p>
      </RevealJS>
    </article>
  );
};

export default TestPage;
