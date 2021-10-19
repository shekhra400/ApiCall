import React from "react";
import { useSelector } from "react-redux";
import select from "reselect";
import { selectPolicyData } from "../../../redux/selectors/policy.selector";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const DisplayPolicy = () => {
  const state = useSelector(state => state);
  debugger;
  const list = selectPolicyData(state);
  return (
    <React.Fragment>
      {list.map(data => (
        <div style={{ marginBottom: "1rem" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.name}
              </Typography>
              <Typography variant="h5" component="div">
                {data.policy}
              </Typography>
              <Typography variant="body2">
                Policy Created on {data.createdAt}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
};

export default DisplayPolicy;
