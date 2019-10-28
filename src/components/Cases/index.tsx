import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Grid,
  Divider,
  Typography,
  Theme,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import CaseCard from "./CaseCard";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {}

const CaseList: React.FC<Props> = ({ classes }) => {
  const data = useStaticQuery(graphql`
    query CasesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cases/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              github
              description
              test
              icon {
                publicURL
              }
            }
            html
          }
        }
      }
    }
  `);

  return (
    <Grid item className={classes.cases}>
      <Divider className={classes.casesDivider} />
      <Typography align={"center"} variant={"h3"} className={classes.header}>
        Cases
      </Typography>
      <Divider />
      <Grid
        container
        direction={"row"}
        justify={"space-evenly"}
        alignItems={"flex-start"}
      >
        {data.allMarkdownRemark.edges.map(
          ({ node: { id, frontmatter } }: any) => (
            <Grid key={id} item xs={3} className={classes.caseCard}>
              <CaseCard {...frontmatter} />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    header: {
      color: "#4bd2c6"
    },
    subHeader: {
      marginBottom: "20px",
      color: "white"
    },
    centerText: {
      marginTop: "40px",
      maxWidth: "680px"
    },
    cases: {
      margin: "20px",
      paddingTop: "20px",
      maxWidth: "840px"
    },
    casesDivider: {
      marginBottom: "50px"
    },
    caseCard: {
      minWidth: "380px",
      maxWidth: "420px",
      margin: "20px"
    }
  });

export default withStyles(styles)(CaseList);
