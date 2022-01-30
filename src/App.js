import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Latest Posts</h1>
      {isLoading ? <p>Loading posts...</p> : <Posts data={posts} />}
    </div>
  );
}

export default App;
