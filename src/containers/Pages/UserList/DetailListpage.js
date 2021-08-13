import {
  ButtonBase,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadUserDetail } from "../../../redux/actions/consumerAction";
import {
  selectUserData,
  selectUserListIsLoading,
} from "../../../redux/selectors/consumer.selector";
import { IconButton } from "@material-ui/core";
import { isEmpty } from "lodash";

import CloseIcon from "@material-ui/icons/Close";

const DetailListPage = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const details = selectUserData(state);
  const loading = selectUserListIsLoading(state);
  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: "400px",
      minHeight: "200px",
    },
    image: {
      width: 208,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },

    loader: {
      margin: "auto",
    },
  }));

  const classe = useStyles();
  const { id } = props;
  useEffect(() => {
    dispatch(LoadUserDetail({ id }));
  }, [dispatch, id]);

  return (
    <div>
      <div className={classe.paper}>
        {loading && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <CircularProgress size={50} className={classe.loader} />
            <h2>Loading Data...</h2>
          </div>
        )}
        {!loading && (
          <IconButton onClick={props.handleClose} style={{ right: -380 }}>
            <CloseIcon style={{ position: "absolute", top: 0, right: 1 }} />
          </IconButton>
        )}
        {!loading && !isEmpty(details) && (
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classe.image}>
                <img
                  className={classe.img}
                  alt="complex"
                  src={details.avatar}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Information
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {details.first_name} {details.last_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: {details.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {details.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default DetailListPage;
