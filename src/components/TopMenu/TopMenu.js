import React from 'react'

import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Image from 'grommet/components/Image';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import logo from './logo-green.png';

export default class TopMenu extends React.PureComponent {
  render() {
    return (
      <Header pad={{horizontal: 'large'}} style={{backgroundColor: '#333333', color: '#fff'}} justify='between'>
          <Anchor href='/'><Image src={logo} width={119} full={false} size="small" /></Anchor>
          <Menu 
            direction='row'
            primary={false}
            size='medium'
            justify='end'
            flex={false}
            >
            <Anchor href='/'>
              Home
            </Anchor>
            <Anchor href='https://www.ziprecipes.net/#pricing-plans'>
            Plans & Prices
            </Anchor>
            <Anchor style={{borderBottom: "2px solid black;"}} href='#'>
            Knowledge Base
            </Anchor>
          </Menu>
        </Header>
    )
  }
}
