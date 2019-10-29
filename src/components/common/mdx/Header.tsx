import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/styles";
import { Typography, Theme, createStyles } from "@material-ui/core";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const Header: React.FC<Props> = ({ children, classes }) => (
  <Typography variant={"h4"} className={classes.header}>
    {children}
  </Typography>
);

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    header: {
      marginTop: "30px",
      color: "#4bd2c6",
      pointerEvents: "all"
    }
  });

export default withStyles(styles)(Header);
