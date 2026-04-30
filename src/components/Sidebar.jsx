import folderIcon from "../assets/folder.png"
import keyboardIcon from "../assets/keyboard.png"
import paperPin from "../assets/paper-pin.png"
import clockIcon from "../assets/clock.png"
import doneIcon from "../assets/check-mark.png"
import trophyIcon from "../assets/trophy.png"
import rightArrowIcon from "../assets/chevron.png"
import downArrowIcon from "../assets/down-arrow.png"
import plusIcon from "../assets/plus.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        Projects <img src={plusIcon} alt="add" />
      </h2>

      <div className="menu">
        <p>
          <span>
            <img src={folderIcon} alt="folder" />
            Project Board
          </span>
        </p>

        <p>
          <span>
            <img src={keyboardIcon} alt="projects" />
            All Projects
          </span>
          <img src={rightArrowIcon} alt="arrow" />
        </p>

        <p>
          <span>
            <img src={paperPin} alt="pinned" />
            Pinned
          </span>
          <img src={rightArrowIcon} alt="arrow" />
        </p>
      </div>

      <div className="section">
        <p>
          <span>
            <img src={clockIcon} alt="progress" />
            In Progress
          </span>
          <img src={downArrowIcon} alt="arrow" />
        </p>

        <ul>
          <li>Piexlque</li>
          <li>Perfecta</li>
          <li>Healthcare</li>
        </ul>

        <p>
          <span>
            <img src={doneIcon} alt="done" />
            Done
          </span>
        </p>
      </div>

      <div className="upgrade">
        <div className="upgrade-icon">
          <img src={trophyIcon} alt="upgrade" />
        </div>

        <h4>Upgrade your plan</h4>
        <p>
          Development is a process that creates growth, progress, positive change
        </p>
      </div>
    </div>
  );
};

export default Sidebar;