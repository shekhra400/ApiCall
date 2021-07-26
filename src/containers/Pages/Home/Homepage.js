import classes from "./HomePage.module.css";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BuildIcon from "@material-ui/icons/Build";
import BeenhereIcon from "@material-ui/icons/Beenhere";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <h2>Welcome To ReactAuthentication !</h2>
      <ul>
        <li>
          <AssignmentIcon fontSize="large" />
          Document
        </li>
        <li>
          <BuildIcon />
          Build
        </li>
        <li>
          <BeenhereIcon />
          Test
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
