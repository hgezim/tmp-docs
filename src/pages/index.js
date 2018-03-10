import React from 'react'
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Image from 'grommet/components/Image';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import Link from "gatsby-link";

export class Topics extends React.PureComponent {
  render() {
    let topics = this.props.topics.map((topic) =>
    <li key={topic.slug}>
      <Link
      to={topic.slug}
      innerRef={(el) => { this.myLink = el }}
    >{topic.title}</Link></li>);
    return <ul>{topics}</ul>;
  }
}

export default class Index extends React.Component {
  lessons(props) {

  }

  render() {
    let chapters = this.props.data.allMarkdownRemark.edges.reduce((acc, current) => {
      let cat = current.node.frontmatter.category;
      let found = acc.find(x => x.category === cat);
      if (found) {
        found.lessons.push({title: current.node.frontmatter.title, slug: current.node.fields.slug});
      }
      else {
        acc.push({category: cat, lessons: [{title: current.node.frontmatter.title, slug: current.node.fields.slug}]});
      }

      return acc;
    }, []);

    let chs =
      chapters.map((ch) => {
        console.log(`key: ${ch.slug}`);

        return <Box
        key={ch.category}
        pad='medium'
        margin='small'
        colorIndex='light-2'>
        {ch.category}
        <Topics topics={ch.lessons} />
      </Box>  
      }  
      );

    return (
        <div>
        <Heading align='center'>Knowledge Base and Documentation</Heading>
        <Columns justify="center">
          {chs}
        </Columns>
        </div>
      );
  }
}

export const chapterQuery = graphql`
   query ChapterQuery {
      allMarkdownRemark(sort: {fields: [frontmatter___chapter, frontmatter___lesson], order: ASC}) {
        edges {
          node {
            frontmatter {
              title
              category
              chapter
              lesson
            }
            fields {
              slug
            }    
          }
        }
      }
   }
`