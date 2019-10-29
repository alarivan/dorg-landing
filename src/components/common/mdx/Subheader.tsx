import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";
import { Typography, Theme, createStyles } from "@material-ui/core";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const Subheader: React.SFC<Props> = ({ children, classes }) => (
  <Typography variant={"h6"} className={classes.subheader}>
    {children}
  </Typography>
);

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    subheader: {
      marginTop: "15px",
      marginBottom: "-10px",
      color: "#4bd2c6",
      pointerEvents: "all"
    }
  });

export default withStyles(styles)(Subheader);
