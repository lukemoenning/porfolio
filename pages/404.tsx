/**
 * ErrorPage component
 */

import React from 'react'
import styled from 'styled-components'
import { theme } from '@/app/libs/theme'
import Link from 'next/link'
import Image from 'next/image'
import * as superSecretObject from '@/app/libs/scripts/supersecretscripts'


const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`

const ErrorPageCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  z-index: 1;
  position: fixed;
`

const ErrorPageMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  min-width: 700px;
`

const ErrorPageMessage = styled.h1`
  font-size: large;
  color: ${theme.colors.lightBlue};
  max-width: 75%;
`

const HomeLink = styled(Link)`
  font-size: large;
  font-weight: bold;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const StartGameLink = styled.span`
  font-size: large;
  font-weight: bold;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const GAME = new superSecretObject.Game()

function Error404() {
  return (
    <ErrorPageWrapper>
      <Image 
        src="/images/game/space.png" 
        alt="space"
        layout="fill" 
        objectFit="cover" 
      />

      {/* ERROR MESSAGE */}
      <ErrorPageMessageWrapper>
        <ErrorPageMessage>Oops... looks like the page you're looking for got lost in space.</ErrorPageMessage>
        <ErrorPageMessage>
          <StartGameLink onClick={() => {
            if (!GAME.isRunning) {
              GAME.startGame(); 
            }
          }}>Try to find it</StartGameLink> 
          {' or return '} 
          <HomeLink href="/">home.</HomeLink>
        </ErrorPageMessage>
      </ErrorPageMessageWrapper>

      {/* CANVAS */}
      <ErrorPageCanvas id='canvas' />

    </ErrorPageWrapper>
  )
}

export default Error404