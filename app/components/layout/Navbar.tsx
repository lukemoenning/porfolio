import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '@/app/libs/theme'
import NavLink from '@/app/components/layout/NavLink'
import type { navItem } from '@/app/libs/types';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavWrapper = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${theme.sizing.navbar.height};
  background-color: ${theme.colors.offWhite};
`

const DesktopNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: ${theme.sizing.navbar.height};
  left: 0;
  width: 100%;
  height: calc(100vh - ${theme.sizing.navbar.height});
  background-color: ${theme.colors.offWhite};
  z-index: 1;
`

const MobileToggle = styled.div`
  display: none;
  color: ${theme.colors.lightBlue};
  font-size: ${theme.fontSize.xxl};
  margin-left: auto;
  margin-right: 50px;
  
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`

const MobileHomeLink = styled(Link)`
  display: none;
  margin-left: 50px;
  margin-right: auto;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`

const NavItems: navItem[] = [
  {name: 'About', href: '/'},
  {name: 'Experience', href: '/experience'},
  {name: 'Projects', href: '/projects'},
  {name: 'Resume', href: '/resume'},
  {name: 'Contact', href: '/contact'},
]

export default function Navbar() { 
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
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isMobileOpen ? 'auto' : 'hidden';
    }
  }

  return (
    <NavWrapper>
      <MobileHomeLink href="/">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </MobileHomeLink>

      <MobileToggle onClick={() => {
        setIsMobileOpen(!isMobileOpen)
        toggleBodyScrollLock()
      }}>
        {isMobileOpen ? <>&#10005;</> : <>&#8801;</>}
      </MobileToggle>

      {isMobileOpen && (
        <MobileNavLinks>
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
        </MobileNavLinks>
      )}

      <DesktopNavLinks>
        {NavItems.map((item) => (
          <NavLink 
            {...item} 
            key={item.name}
            isActive={item.name === activeLink}
            onClick={() => setActiveLink(item.name)}
          />
        ))}
      </DesktopNavLinks>
    </NavWrapper>
  )
}