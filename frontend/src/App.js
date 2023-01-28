import Textbox from "./components/Textbox";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex flex-row-reverse absolute top-0 right-0 mt-4 mr-6">
        <Link to="/leaderboard">
          <h1>Leaderboard</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="mb-2">Username</h1>
        <Textbox />
      </div>
    </div>
  );
}

export default App;
