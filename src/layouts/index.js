import React from 'react'
import PropTypes from 'prop-types'
import TopMenu from '../components/TopMenu'
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Notification from 'grommet/components/Notification';

// Grommet
import App from 'grommet/components/App'

// Styles
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <App centered={false}>
        <TopMenu />
        {this.props.children()}
      </App>
    )
  }
}
