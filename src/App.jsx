import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import Topbar from "./components/Topbar";
import "./App.css";
import WorkspaceHeader from "./components/WorkspaceHeader";
import { useState  } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar toggleSidebar={() => setShowSidebar(prev => !prev)} />
      </div>

      <div className="main-content">
        <div className={`sidebar-wrapper ${showSidebar ? "show" : ""}`}>
          <Sidebar />
        </div>

        <div className="main">
          <WorkspaceHeader />
          <Board />
        </div>
      </div>
    </>
  );
}

export default App;