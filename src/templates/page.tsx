import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import {
  Grid,
  WithStyles,
  Theme,
  createStyles,
  withStyles
} from "@material-ui/core";
import Header from "../components/common/mdx/Header";
import Subheader from "../components/common/mdx/Subheader";
import Body from "../components/common/mdx/Body";
import SEO from "../components/Seo";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {
  data: any;
}

const PageTemplate: React.FC<Props> = ({ data: { mdx }, classes }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Grid
        container
        direction={"column"}
        justify={"flex-start"}
        className={classes.container}
      >
        <MDXProvider
          components={{
            h4: Header,
            h6: Subheader,
            p: Body,
            ul: Body,
            li: props => <li {...props} className={classes.listItem} />,
            a: props => <a {...props} className={classes.link} />
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Grid>
    </Layout>
  );
};

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    container: {
      width: "80%",
      maxWidth: "800px",
      margin: "auto",
      marginBottom: "20px"
    },
    link: {
      color: "white"
    },
    listItem: {
      marginLeft: "15px",
      marginTop: "5px"
    }
  });

export default withStyles(styles)(PageTemplate);

export const query = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
