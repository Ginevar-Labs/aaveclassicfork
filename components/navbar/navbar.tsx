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
      'Markets',
      'Deposit',
      'Borrow',
      'Dashboard',
      'Swap',
      'Stake',
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
            <Text b color="inherit" hideIn="xs">
               ArbAAVE
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link isActive={nav==0 ?  true : false} onClick={() => {
                  setNav(0);
                  onChange(0)
               }}>Markets</Navbar.Link>
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button

                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Lending
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu 
                     aria-label="ACME features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="deposit"
                        showFullDescription
                        description="Deposit any token into your wallet to start earning!"
                        icon={icons.scale}
                        
                     >
                       <b isActive={nav==1 ?  true : false} onClick={() => {
                  setNav(1);
                  onChange(1)
               }}>Deposit</b>
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="borrow"
                        showFullDescription
                        description="Borrow against your deposited tokens and earn through staking"
                        icon={icons.flash}
                     >
                       <b isActive={nav==1 ?  true : false} onClick={() => {
                  setNav(2);
                  onChange(2)
               }}>Borrow</b>
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="dashboard"
                        showFullDescription
                        description="See your historic transactions and keep track of your earnings"
                        icon={icons.user}
                     >
                       <b isActive={nav==1 ?  true : false} onClick={() => {
                  setNav(3);
                  onChange(3)
               }}>Dashboard</b>
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive={nav==4 ?  true : false} onClick={() => {
                  setNav(4);
                  onChange(4)
               }} >
                  Swap
               </Navbar.Link>
               <Navbar.Link isActive={nav==5 ?  true : false} onClick={() => {setNav(5);
                                 onChange(5)}}>Stake</Navbar.Link>
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
            <Navbar.Item>
               <Button color="secondary" auto flat href="#">
                  Connect
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href=""
               >
                  <GithubIcon />
               </Link>
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
