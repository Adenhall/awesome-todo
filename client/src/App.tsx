import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      await fetch("/api/health_check");
    })();
  }, []);
  return <h1>Hello world</h1>;
}

export default App;
