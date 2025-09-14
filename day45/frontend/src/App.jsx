import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({}); // 👈 start with empty object

  useEffect(() => {
    axios.get("http://localhost:5000/user/info")
      .then((response) => {
        console.log("API Response:", response.data); // should log { name: "Hatim" }
        setData(response.data); // store { name: "Hatim" }
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div>
      <h1>{data.name}</h1> {/* 👈 should render Hatim */}
    </div>
  );
}

export default App;

