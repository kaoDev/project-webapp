import React from "react";
import Link from "gatsby-link";
import { css } from "glamor";

import { rhythm, scale } from "../utils/typography";

require("prismjs/themes/prism-okaidia.css");

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (
      typeof __PREFIX_PATHS__ !== `undefined` &&
      __PREFIX_PATHS__
    ) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            Project WebApp
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            Project WebApp
          </Link>
        </h3>
      );
    }
    return (
      <div
        css={{
          maxWidth: "100vw",
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          "@media(min-width: 630px)": {
            maxWidth: rhythm(24),
          },
        }}
      >
        {header}
        {children()}
      </div>
    );
  }
}

export default Template;
