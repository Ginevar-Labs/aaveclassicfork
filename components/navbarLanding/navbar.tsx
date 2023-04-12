import {css, Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import { useState } from 'react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

export const Nav = ({onChange} : {onChange:any}) => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const [nav, setNav] = useState(0);
   const collapseItems = [
      'Home',
      'Governance',
      'FAQ',
   ];
   return (
      <Navbar
         isBordered 
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link isActive={nav==0 ?  true : false} onClick={() => {
                  setNav(0);
                  onChange(0)
               }}>Home</Navbar.Link>
               <Navbar.Link isActive={nav==4 ?  true : false} onClick={() => {
                  setNav(4);
                  onChange(4)
               }} >
                  Governance
               </Navbar.Link>
               <Navbar.Link isActive={nav==5 ?  true : false} onClick={() => {setNav(5);
                                 onChange(5)}}>FAQ</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                     onClick={() => {setNav(index);
                                 onChange(index)}}
                  >
                     {item}


                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Switch

                  color="secondary"
                  checked={isDark}
                  iconOn={<SunIcon filled />}
                  iconOff={<MoonIcon filled />}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item >
               <Button rounded color="gradient" auto  href="/">
                  Go to App
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch

                  color="secondary"
                  checked={isDark}
                  iconOn={<SunIcon filled />}
                  iconOff={<MoonIcon filled />}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
