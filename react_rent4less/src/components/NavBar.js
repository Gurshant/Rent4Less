import React from 'react';
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'

import { useMediaQuery } from 'react-responsive'

export default function NavBar(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 830px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 831px)' })
  return (
    <>
      {isMobile &&
        <NavBarMobile{...props} />
      }
      {
        isDesktop &&
        <NavBarDesktop {...props} />
      }
    </>
  );
}