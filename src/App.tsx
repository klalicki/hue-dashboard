import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BridgeSyncLogin } from "./components/BridgeSyncLogin/BridgeSyncLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BridgeSyncLogin />
    </div>
  );
}

export default App;
