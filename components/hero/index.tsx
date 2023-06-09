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
import tokenList from '../tokenList.json'

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
         {tokenList?.map((token, index) => {
            return (
           <Table.Row key={index}>
             
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src={token.img} alt={token.ticker} objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p>{token.ticker}</p> 
                   <label>{token.name}</label> 
                   </Container>
             </Table.Cell>
             <Table.Cell>55.62M</Table.Cell>
             <Table.Cell>27.21M</Table.Cell>
             <Table.Cell>0.39%</Table.Cell>
             <Table.Cell>1.79%</Table.Cell>
             <Table.Cell>6.98%</Table.Cell>
           </Table.Row>
            )
          })}
         </Table.Body>
       </Table>
    </Container></>
   );
};
