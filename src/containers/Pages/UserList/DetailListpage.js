import { ButtonBase, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadUserDetail } from "../../../redux/actions/consumerAction";
import { selectUserData } from "../../../redux/selectors/consumer.selector";
import { IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const DetailListPage = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const details = selectUserData(state);
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
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
        <IconButton onClick={props.handleClose} style={{ right: -350 }}>
          <CloseIcon style={{ position: "absolute", top: 0, right: 10 }} />
        </IconButton>
        {!props.loading && (
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
