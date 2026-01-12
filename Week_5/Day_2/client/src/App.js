import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>This is my React App</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
