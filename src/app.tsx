import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import { Card } from "./components";

import "./app.css";

export function App() {
  return (
    <>
      <div>
        <main class="flex items-center justify-center w-screen">
          <h1>Hi 👋, I'm Mithun Balasubramanian</h1>
        </main>

        <div class="flex">
          <Card title="Cotes" body="Description" />
          <Card title="Personal Website" body="Description" />
        </div>
      </div>
    </>
  );
}
