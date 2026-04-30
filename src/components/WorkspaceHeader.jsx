const WorkspaceHeader = () => {
  return (
    <div className="workspace-header">
      <div className="workspace-top">
        <div className="left">
          <h2>Piexlque</h2>
          <span className="status">● On Track</span>
          <span className="updated">Last updated: 02:00PM Yesterday</span>
        </div>

        <div className="right">
          <div className="avatars">
            <img src="https://i.pravatar.cc/30?img=1" />
            <img src="https://i.pravatar.cc/30?img=2" />
            <img src="https://i.pravatar.cc/30?img=3" />
          </div>

          <button>Only My Issues</button>
          <button>Recently Updated</button>

          <button>Kanban</button>
          <button>Filter</button>
          <button>Sort</button>
        </div>
      </div>

      <div className="workspace-search">
        <input placeholder="Search..." />
      </div>

      <div className="workspace-tabs">
        <span>Overview</span>
        <span className="active">Board</span>
        <span>Files(10)</span>
        <span>Timeline</span>
        <span>Reports(6)</span>
      </div>
    </div>
  );
};

export default WorkspaceHeader;