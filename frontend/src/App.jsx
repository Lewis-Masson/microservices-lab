import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([fetch("/api/users"), fetch("/api/videos")])
      .then(async ([usersResponse, videosResponse]) => {
        if (!usersResponse.ok || !videosResponse.ok) {
          throw new Error("API request failed");
        }
        setUsers(await usersResponse.json());
        setVideos(await videosResponse.json());
      })
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Microservices Lab</h1>
      {error && <p role="alert">Error: {error}</p>}
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            {user.age != null ? `,\nAge: ${user.age}` : ""}
          </li>
        ))}
      </ul>
      <h2>Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            {video.title}
            {video.duration ? ` —\n${video.duration}` : ""}
          </li>
        ))}
      </ul>
    </main>
  );
}
