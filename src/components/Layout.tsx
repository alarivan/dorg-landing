import React from "react";
import {
  MuiThemeProvider,
  WithStyles,
  Theme,
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../style/theme";
import Background from "./shell/Background";
import TopBar from "./shell/TopBar";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const Layout: React.FC<Props> = ({ children, classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <TopBar />
      <main className={classes.root}>
        {children}
        <Typography className={classes.copyright}>
          © 2019 dOrg, BBLLC. All Rights Reserved.
        </Typography>
      </main>
    </MuiThemeProvider>
  );
};

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      height: "100vh",
      // bring forward (infront of background)
      position: "relative",
      // disable pointer events, don't block background
      pointerEvents: "none"
    },
    copyright: {
      color: "white",
      textAlign: "center",
      padding: "0.5rem"
    }
  });

export default withStyles(styles)(Layout);
