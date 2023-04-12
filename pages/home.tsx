import type {NextPage} from 'next';
import {Nav} from '../components/navbarLanding/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/markets';
import {Deposit} from '../components/deposit';
import {Borrow} from '../components/borrow';
import {Dashboard} from '../components/dashboard';
import {TopMarkets} from '../components/topmarkets';
import {Swap} from '../components/swap';
import {Stake} from '../components/stake';
import {Trusted} from '../components/trusted';
import {Features1} from '../components/features1';
import {Box} from '../components/styles/box';
import {icons} from '../components/navbar/icons';
import {AcmeLogo} from '../components/navbar/logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../components/icons/GithubIcon';
import { useState } from 'react';
import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Statistics} from '../components/statistics';
import {Plans} from '../components/plans';
import {Faq} from '../components/faq';
import {Footer} from '../components/footer';

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
            <Features1 />
            <Plans />
            <Trusted />
            <TopMarkets />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
