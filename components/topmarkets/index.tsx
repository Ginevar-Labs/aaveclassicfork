import {Button, Divider, Input, Text, Modal, useModal} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { SingleView } from './unused';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";
import tokenList from '../tokenList.json';
import {icons} from '../navbar/icons';
import { useState } from 'react';
import {Chart} from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

export const TopMarkets = () => {
  const { setVisible, bindings } = useModal();
   const [activeToken, setActiveToken] = useState(0);
   const [marketMode, setMarketMode] = useState(0)
   //0 is all markets, 1 is single market

   return (
     <>
     <Container>
       <Spacer y={2} />

            <Text h2 css={{textAlign: 'center'}}>
               Global Top Markets
            </Text>
        {marketMode==0 ? <>
       <Spacer y={2} />
        <Table bordered shadow={false} aria-label="Markets table" css={{height: "auto",minWidth: "100%",}}>
         <Table.Header>
           <Table.Column>Top Markets</Table.Column>
           <Table.Column>Market Size</Table.Column>
           <Table.Column>Borrowed (Total)</Table.Column>
           <Table.Column>Deposit (Total)</Table.Column>
         </Table.Header>
         <Table.Body>
         {tokenList?.map((token, index) => {
            return (
           <Table.Row key={index} >
             
             <Table.Cell css={{display:"flex"}}>
                <Image width={50} height={50} src={token.img} alt={token.ticker} objectFit="contain"/>
                <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                   <p >{token.ticker}</p> 
                   <label>{token.name}</label> 
                </Container>
             </Table.Cell>
             <Table.Cell>55.62M</Table.Cell>
             <Table.Cell>27.21M</Table.Cell>
             <Table.Cell>0.39%</Table.Cell>
           </Table.Row>
            )
          })}
         </Table.Body>
       </Table> </>
       : <SingleView onChange={(id) => setMarketMode(id)}/>}
    </Container></>
   );
};
