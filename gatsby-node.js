const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    // console.log("node::::", node);
    const slug = createFilePath({ node, getNode, basePath: `docs` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            console.log("note fields:", node.fields);
              createPage({
                  path: node.fields.slug,
                  component: path.resolve(`./src/templates/lesson.js`),
                  context: {
                      // Data passed to context is available in page queries as GraphQL variables.
                      slug: node.fields.slug
                  }
              })
          })
        // console.log(JSON.stringify(result, null, 4))
        resolve()
      })
    })
  };