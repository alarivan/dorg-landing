import React from "react";
import Layout from "../components/Layout";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
  Grid,
  Typography
} from "@material-ui/core";
import LearnMore from "../components/LearnMore";
import Cases from "../components/Cases";
import SEO from "../components/Seo";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const IndexPage: React.FC<Props> = ({ classes }) => (
  <Layout>
    <SEO title="Home" />
    <Grid
      container
      direction={"column"}
      justify={"flex-start"}
      alignItems={"center"}
    >
      <Grid item className={classes.centerText}>
        <Typography align={"center"} variant={"h2"} className={classes.header}>
          Let&apos;s Build Together
        </Typography>
      </Grid>
      <LearnMore />
      <Cases />
    </Grid>
  </Layout>
);

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    header: {
      color: "#4bd2c6"
    },
    centerText: {
      marginTop: "40px",
      maxWidth: "680px"
    }
  });

export default withStyles(styles)(IndexPage);
