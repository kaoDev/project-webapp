import React from 'react'
import glamorous from 'glamorous'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-kao.jpeg'
import { rhythm } from '../utils/typography'

const Container = glamorous.div({
  display: 'flex',
  marginBottom: rhythm(2.5),
})

const Avatar = glamorous.div(
  {
    marginRight: rhythm(1 / 2),
    marginBottom: 0,
    width: rhythm(2),
    height: rhythm(2),
    borderRadius: '100%',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    flexShrink: 0,
    textDecoration: 'none',
    color: 'inherit',
  },
  ({ image }) => ({
    backgroundImage: `url(${image})`,
  })
)

class Bio extends React.Component {
  render() {
    return (
      <Container>
        <Avatar image={profilePic} alt={`Kalle Ott`} />
        <p>
          Written by{' '}
          <a href="https://twitter.com/kaoDev">
            <strong>Kalle Ott</strong>
          </a>{' '}
          who lives and works in Kiel
        </p>
      </Container>
    )
  }
}

export default Bio
