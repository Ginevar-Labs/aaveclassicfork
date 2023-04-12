import {Button, Divider, Input, Text, Spacer} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$20',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >Multichain, secure{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     lending protocol
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  Earn interest, borrow assets, and build applications on top of ZkSynz and Arbitrum chains
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Text
                    h1
                    size={50}
                    css={{
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      'mb':"-0.5em"
                    }}
                    weight="bold"
                  >
                    $ 8,504,535,619.55
                  </Text>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",
                     }}
                  >
                     of liquidity locked in ArbAAVE across markets and 2 chains
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="36.png" />
            </Box>
         </Flex>
            <Spacer y={2}/>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
