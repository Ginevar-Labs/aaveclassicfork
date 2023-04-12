import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'start'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               <Flex
                  css={{w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <AcmeLogo />
               </Flex>
               <Flex
                  css={{w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Useful Links</Text>
                  <Box as={'ul'} css={{ listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Home
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Deposit
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Stake
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           All markets
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5 css={{marginLeft:"-3em"}}>Governance</Text>
                  <Box as={'ul'} css={{ listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Dashboard
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Submit Proposal
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Social Media</Text>
                  <Box as={'ul'} css={{listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Telegram
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Discord
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Twitter
                        </Text>
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        Terms of Service
                     </Text>
                     <Text span css={{color: '$accents8'}}>
                        Privacy Policy
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        © Copyright 2023 ArbAAVE
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
