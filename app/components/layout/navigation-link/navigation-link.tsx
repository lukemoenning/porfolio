import * as S from './navigation-link.styles'

import type { navItem } from '@/app/libs/types'

interface NavLinkProps extends navItem {
  isActive: boolean
  onClick: () => void
}

const NavLink = ({ name, href, isActive, onClick }: NavLinkProps) => {
  return (
    <S.NavLinkWrapper href={href} onClick={onClick}>
      {isActive ? (
        <S.ActiveName>{name}</S.ActiveName>
      ) : (
        <S.InactiveName>{name}</S.InactiveName>
      )}
    </S.NavLinkWrapper>
  )
}

export default NavLink
