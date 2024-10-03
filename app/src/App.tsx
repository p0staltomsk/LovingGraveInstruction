import { useState } from "react";
import Rpg from "@/components/Rpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Rpg />
      </div>
    </>
  );
}

export default App;
