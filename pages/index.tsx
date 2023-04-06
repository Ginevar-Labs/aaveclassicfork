import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/markets';
import {Deposit} from '../components/deposit';
import {Borrow} from '../components/borrow';
import {Dashboard} from '../components/dashboard';
import {Swap} from '../components/swap';
import {Stake} from '../components/stake';
import {Trusted} from '../components/trusted';
import {Box} from '../components/styles/box';
import {icons} from '../components/navbar/icons';
import {AcmeLogo} from '../components/navbar/logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../components/icons/GithubIcon';
import { useState } from 'react';
import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';

const Home: NextPage = () => {
   
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const [nav, setNav] = useState(0);
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (

      <Layout>
         <Nav
            onChange={(id) => setNav(id)}
         />
         <Box as="main">
            {nav== 0 ? <Hero/> : ""}
            {nav== 1 ? <Deposit/> : ""}
            {nav== 2 ? <Borrow/> : ""}
            {nav== 3 ? <Dashboard/> : ""}
            {nav== 4 ? <Swap/> : ""}
            {nav== 5 ? <Stake/> : ""}
         </Box>
      </Layout>
   );
};

export default Home;
