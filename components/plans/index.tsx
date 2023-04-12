import {Button, Card, Divider, Grid, Link, Text, Spacer} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Plans = () => {
   return (
      <>
         <Flex
            css={{py: '$20', gap: '1rem', px: '$6'}}
            justify={'center'}
            wrap={'wrap'}
            direction={'column'}
            align={'center'}
         >
            <Flex direction={'column'} align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  Available
               </Text>
               <Text h2>ArbAAVE Markets</Text>
            </Flex>
            <Grid.Container gap={1} justify="center">
               <Grid sm={12} md={3}>   
                  <Card
                     isPressable
                     isHoverable
                     css={{ p: "$6", mw: "400px" }}>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src="https://aave.com/icons/networks/arbitrum.svg"
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          Arbitrum
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>arbitrum.io</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>
                      Ethereums security with speed. Arbitrum is a L2 rollup deployed on Aave for secure, fast transactions.
                    </Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href=""
                    >
                      Go to market ->
                    </Link>
                  </Card.Footer>
                </Card>
               </Grid>
               <Grid sm={12} md={3}>   
                  <Card
                     isPressable
                     isHoverable
                     css={{ p: "$6", mw: "400px" }}>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          ZkSync
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>zksync.io</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>
                      Layer-2 protocol that scales Ethereum with cutting-edge ZK tech.
                    </Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href=""
                    >
                      Go to market ->
                    </Link>
                  </Card.Footer>
                </Card>
               </Grid>
            </Grid.Container>
       <Spacer y={2} />
        <Card variant="bordered" justify="center" css={{width:"50%"}}>
          <Card.Body>
            <Text css={{textAlign:"center"}}><b>MORE TO COME</b> Submit a proposal to deploy a new market in the ecosystem.</Text>
          </Card.Body>
        </Card>
       <Spacer y={2} />
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
