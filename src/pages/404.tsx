import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

// eslint-disable-next-line
interface Props {}

const NotFoundPage: React.FC<Props> = () => (
  <Layout>
    <SEO title="404: Not found" />
  </Layout>
);

export default NotFoundPage;
