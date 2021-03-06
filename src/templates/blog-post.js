import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import rehypeReact from "rehype-react";
import isRelativeUrl from "is-relative-url";

import Bio from "../components/Bio";
import { rhythm, scale } from "../utils/typography";
import { ComponentPlayGround } from "../components/ComponentPlayground";
import glamorous from "glamorous";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { CodeView } from "../components/CodeView";

const GatsbyOrOutboundLink = props =>
  isRelativeUrl(props.href) ? (
    <Link to={props.href} {...props} />
  ) : (
    <OutboundLink {...props} />
  );

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "component-playground": ComponentPlayGround,
    // "code-view": CodeView,
    code: CodeView,
    a: GatsbyOrOutboundLink,
  },
}).Compiler;

const BlogContainer = glamorous.div({
  maxWidth: "100%",
  flex: 1,
});

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(
      this.props,
      "data.site.siteMetadata.title",
    );
    const { previous, next } = this.props.pathContext;

    return (
      <BlogContainer>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        {renderAst(post.htmlAst)}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            listStyle: "none",
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </BlogContainer>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
