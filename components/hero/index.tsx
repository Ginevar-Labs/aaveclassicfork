import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";

export const Hero = () => {

   return (
     <><Container>
      <Table bordered shadow={false} aria-label="My Markets" css={{height: "auto",minWidth: "100",}}>
         <Table.Header>
           <Table.Column>0x8..8D3</Table.Column>
           <Table.Column>Total Market Size</Table.Column>
           <Table.Column>Total Available</Table.Column>
           <Table.Column>Total Borrows</Table.Column>
           <Table.Column>Status</Table.Column>
         </Table.Header>

         <Table.Body>
           <Table.Row key="1">
             <Table.Cell>ArbAAVE Lending v1</Table.Cell>
             <Table.Cell>1.23B</Table.Cell>
             <Table.Cell>781.51M</Table.Cell>
             <Table.Cell>448.77M</Table.Cell>
             <Table.Cell><Badge color="secondary">HEALTHY</Badge></Table.Cell>
           </Table.Row>
         </Table.Body>
      </Table>

       <Spacer y={2} />
       <Table bordered shadow={false} aria-label="Markets table" css={{height: "auto",minWidth: "100%",}}>
         <Table.Header>
           <Table.Column>Asset</Table.Column>
           <Table.Column>Market Size</Table.Column>
           <Table.Column>Borrowed (Total)</Table.Column>
           <Table.Column>Deposit APY</Table.Column>
           <Table.Column>Borrow APY (Variable)</Table.Column>
           <Table.Column>Borrow APY (Fixed)</Table.Column>
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
             <Table.Cell>55.62M</Table.Cell>
             <Table.Cell>27.21M</Table.Cell>
             <Table.Cell>0.39%</Table.Cell>
             <Table.Cell>1.79%</Table.Cell>
             <Table.Cell>6.98%</Table.Cell>
           </Table.Row>
           <Table.Row key="2">
             
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/aave.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>AAVE</p> 
                   <label>AAVE Protocol</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>68.44K</Table.Cell>
             <Table.Cell>8.4K</Table.Cell>
             <Table.Cell>1.25%</Table.Cell>
             <Table.Cell>1.64%</Table.Cell>
             <Table.Cell>-</Table.Cell>
           </Table.Row>
           <Table.Row key="3">
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://altcoinsbox.com/wp-content/uploads/2023/03/arbitrum-logo-750x750.webp" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>ARB</p> 
                   <label>Arbitrum</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>525.4K</Table.Cell>
             <Table.Cell>174.9K</Table.Cell>
             <Table.Cell>1.78%</Table.Cell>
             <Table.Cell>2.14%</Table.Cell>
             <Table.Cell>-</Table.Cell>
           </Table.Row>
           <Table.Row key="4">
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src="https://app.aave.com/icons/tokens/usdt.svg" alt="Dai" objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>USDT</p> 
                   <label>USD Tether</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>33.22M</Table.Cell>
             <Table.Cell>28.19M</Table.Cell>
             <Table.Cell>0.94%</Table.Cell>
             <Table.Cell>1.02%</Table.Cell>
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
             <Table.Cell>22.81M</Table.Cell>
             <Table.Cell>35.19M</Table.Cell>
             <Table.Cell>1.94%</Table.Cell>
             <Table.Cell>2.02%</Table.Cell>
             <Table.Cell>24.04%</Table.Cell>
           </Table.Row>
         </Table.Body>
       </Table>
    </Container></>
   );
};
