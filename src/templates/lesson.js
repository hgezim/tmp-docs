import React from "react";
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

export default ({data}) => {
    const post = data.markdownRemark;
    let ret = 
        <Split fixed={true} flex='right' separator={true} showOnResponsive='both'>
        <Box
          pad={{vertical: 'small'}}
          size='medium'
          >
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
        </Box>
        <Box
          justify='center'
          align='center'
          pad='medium'>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Split>;
  return ret;
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
          frontmatter {
            title
          }
          html,
          tableOfContents
        } 
      }
`