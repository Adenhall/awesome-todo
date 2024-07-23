import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      await fetch("/api/health_check");
    })();
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world</h1>;
}

export default App;
