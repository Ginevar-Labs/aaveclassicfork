import {Card, Divider, Text, Spacer, Image} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Image css={{transform:"scale(1)"}}
                  src="lock.svg"
                  alt="Safety"
                />
                <Spacer y={2}/>
               <Text span css={{color: '$blue600'}}>
                  Safety Module
               </Text>
               <Text h3>Backstop for protocol insolvency</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                   Locked token will be used as a mitigation tool in case of a shortfall on liquidity within the money markets belonging to the ecosystem.
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <Flex direction={'column'}>
                           <Text h5>Tokens in stash</Text>
                           <Text h1
                             size={25}>
                              ARB, ETH, stETH, DAI, USDC, MATIC
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <Flex direction={'column'}>
                           <Text h5>Total Reserves</Text>
                           <Text
                             h1
                             size={25}
                             css={{
                               textGradient: "45deg, $blue600 -20%, $pink600 50%"
                             }}
                             weight="bold"
                           >
                             $ 34,535,619.55
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
