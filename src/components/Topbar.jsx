const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <h2 className="logo">ClickUp</h2>

        <div className="nav-links">
          <span>Dashboard</span>
          <span className="active">Projects</span>
          <span>Note</span>
          <span>Time Tracking</span>
          <span>Reports</span>
        </div>
      </div>

      <div className="topbar-right">
        <span className="icon">🔔</span>
        <span className="icon">🟢</span>
        <img className="avatar" src="https://i.pravatar.cc/100" />
      </div>
    </div>
  );
};

export default Topbar;