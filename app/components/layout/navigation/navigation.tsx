import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './navigation.styles'

import NavLink from '@/app/components/layout/navigation-link/navigation-link'
import type { navItem } from '@/app/libs/types'

const NavItems: navItem[] = [
  { name: 'About', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' }
]

const Navbar = () => {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState<string>('')
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

  /**
   * Set active link based on current route
   */
  useEffect(() => {
    NavItems.forEach((item) => {
      if (router.pathname.includes(item.href)) {
        setActiveLink(item.name)
      }
    })
  }, [router.pathname])

  const toggleBodyScrollLock = () => {
    const body = document.querySelector('body')
    if (body) {
      body.style.overflow = isMobileOpen ? 'auto' : 'hidden'
    }
  }

  return (
    <S.NavWrapper>
      <S.MobileHomeLink href="/">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </S.MobileHomeLink>

      <S.MobileToggle
        onClick={() => {
          setIsMobileOpen(!isMobileOpen)
          toggleBodyScrollLock()
        }}
      >
        {isMobileOpen ? <>&#10005;</> : <>&#8801;</>}
      </S.MobileToggle>

      {isMobileOpen && (
        <S.MobileNavLinks>
          {NavItems.map((item) => (
            <NavLink
              {...item}
              key={item.name}
              isActive={item.name === activeLink}
              onClick={() => {
                setActiveLink(item.name)
                setIsMobileOpen(false)
                toggleBodyScrollLock()
              }}
            />
          ))}
        </S.MobileNavLinks>
      )}

      <S.DesktopNavLinks>
        {NavItems.map((item) => (
          <NavLink
            {...item}
            key={item.name}
            isActive={item.name === activeLink}
            onClick={() => setActiveLink(item.name)}
          />
        ))}
      </S.DesktopNavLinks>
    </S.NavWrapper>
  )
}

export default Navbar
