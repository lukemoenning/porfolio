import Image from 'next/image'

import * as S from './error404.styles'

import * as superSecretObject from '@/app/libs/scripts/supersecretscripts'

const GAME = new superSecretObject.Game()

const Error404 = () => {
  return (
    <S.ErrorPageWrapper>
      <Image
        src="/images/game/space.png"
        alt="space"
        layout="fill"
        objectFit="cover"
      />

      {/* ERROR MESSAGE */}
      <S.ErrorPageMessageWrapper>
        <S.ErrorPageMessage>
          Oops... looks like the page you're looking for got lost in space.
        </S.ErrorPageMessage>
        <S.ErrorPageMessage>
          <S.StartGameLink
            onClick={() => {
              if (!GAME.isRunning) {
                GAME.startGame()
              }
            }}
          >
            Try to find it
          </S.StartGameLink>
          {' or return '}
          <S.HomeLink
            onClick={() => {
              if (GAME.isRunning) {
                GAME.endGame()
              }
            }}
            href="/"
          >
            home.
          </S.HomeLink>
        </S.ErrorPageMessage>
      </S.ErrorPageMessageWrapper>

      {/* CANVAS */}
      <S.ErrorPageCanvas id="canvas" />
    </S.ErrorPageWrapper>
  )
}

export default Error404
