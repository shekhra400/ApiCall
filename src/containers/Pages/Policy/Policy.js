import React from "react";
import classes from "./Policy.module.css";
import { Link } from "react-router-dom";
import DisplayPolicy from "./DisplayPolicy";

const Policy = () => {
  const createPolicyHandler = () => {};
  return (
    <React.Fragment>
      <div className={classes.main}>
        <h2>My Policies</h2>
        <Link to="/addPolicy" className={classes.actions}>
          Add a new Policy
        </Link>
      </div>
      <div className={classes.cardDisplay}>
        <DisplayPolicy />
      </div>
    </React.Fragment>
  );
};

export default Policy;
