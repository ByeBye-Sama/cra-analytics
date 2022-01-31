import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from 'theme'
import { Text } from 'components'
import { DefaultLayout } from 'layouts'
import { routesPath } from 'constants.js'

const StyledLink = styled(Link)`
  ${theme.textStyle('title')}
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  font-weight: 700;
  padding: ${theme.spacing(1, 2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    border-radius: ${theme.shape.borderRadius};
    color: ${theme.colors.black};
    transition: all 0.5s ease-in-out;
  }
`

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Text textStyle="h1" color="white">
        React is working
      </Text>
      <StyledLink to={routesPath.ABOUT}>Test Router</StyledLink>
    </DefaultLayout>
  )
}

export default HomeScreen
