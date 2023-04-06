import {css, Button, Divider, Input, Text, Switch} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Borrow = () => {
   const [showStable, setShowStable] = useState(false);

   return (
     <><Container>
       <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Borrow
      </Text>
      <Input
          bordered
          placeholder="Search Token"
          color="secondary"
          css={{
                  width: '35%',
               }}
          contentRight={
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#9750dd",}} />
            }
        />
        <Badge css={{marginLeft: '3em'}} onClick={() => {
                  setShowStable(!showStable)
               }}
              variant={showStable ? "default" : "bordered"}
              enableShadow 
              disableOutline 
              color="secondary"> 
              Show Stables 
        </Badge>
       <Spacer y={2} />
       <Table bordered shadow={false} aria-label="Markets table" css={{height: "auto",minWidth: "100%",}}>
         <Table.Header>
           <Table.Column>Asset</Table.Column>
           <Table.Column>Available to Borrow</Table.Column>
           <Table.Column>Variable APY</Table.Column>
           <Table.Column>Fixed APY</Table.Column>
         </Table.Header>
         <Table.Body>
           <Table.Row key="1">
             
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/dai.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>DAI</p> 
                   <label>DAI Stablecoin</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>-</Table.Cell>
             <Table.Cell>0.18%</Table.Cell>
             <Table.Cell>0.39%</Table.Cell>
           </Table.Row>
           <Table.Row key="2">
             
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/aave.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>AAVE</p> 
                   <label>AAVE Protocol</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>-</Table.Cell>
             <Table.Cell>0.39%</Table.Cell>
             <Table.Cell>1.64%</Table.Cell>
           </Table.Row>
           <Table.Row key="3">
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://altcoinsbox.com/wp-content/uploads/2023/03/arbitrum-logo-750x750.webp" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>ARB</p> 
                   <label>Arbitrum</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>-</Table.Cell>
             <Table.Cell>1.27%</Table.Cell>
             <Table.Cell>2.14%</Table.Cell>
           </Table.Row>
           <Table.Row key="4">
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/usdt.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>USDT</p> 
                   <label>USD Tether</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>-</Table.Cell>
             <Table.Cell>10.9%</Table.Cell>
             <Table.Cell>16.04%</Table.Cell>
           </Table.Row>
           <Table.Row key="5">
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/cbeth.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>cbETH</p> 
                   <label>Coinbase Wrapped ETH</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>-</Table.Cell>
             <Table.Cell>9.19%</Table.Cell>
             <Table.Cell>24.04%</Table.Cell>
           </Table.Row>
         </Table.Body>
       </Table>
    </Container></>
   );
};
