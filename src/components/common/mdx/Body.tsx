import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";
import { Typography, Theme, createStyles } from "@material-ui/core";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const Body: React.FC<Props> = ({ children, classes }) => (
  <Typography variant={"body1"} className={classes.body}>
    {children}
  </Typography>
);

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    body: {
      marginTop: "15px",
      color: "white",
      pointerEvents: "all"
    }
  });

export default withStyles(styles)(Body);
