import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([
    { username: "Nhi", score: 200 },
    { username: "Paul", score: 100 },
    { username: "Linh", score: 1 },
  ]);

  // Use this to fetch once backend API is setup, it fetches array of objects in ranking.

  // useEffect(() => {
  //     fetch("http://localhost:8000/api/leaderboard")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setLeaderboard(data);
  //     });
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <h1 className="mb-2 mt-4 absolute top-0 left-0 ml-4">Play</h1>
      </Link>
      <h1 className="mb-2 mt-4">Leaderboard</h1>
      <div className="flex flex-col items-center justify-center h-screen">
        {leaderboard.map((user) => (
          <div className="flex flex-row items-center justify-center">
            <h1 className="mr-2">{user.username}</h1>
            <h1>{user.score}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
