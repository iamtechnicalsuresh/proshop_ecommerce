import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={description} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell best products in cheap price",
  keyword: "electronics, buy electronics, cheap electronics",
};

export default Meta;
