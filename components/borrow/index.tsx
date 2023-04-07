import {css, Button, Divider, Input, Text, Modal, useModal} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";
import {icons} from '../navbar/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { SingleBorrow } from './single';
import tokenList from '../tokenList.json';

export const Borrow = () => {
   const [showStable, setShowStable] = useState(false);
  const { setVisible, bindings } = useModal();
   const [activeToken, setActiveToken] = useState(0);
   const [marketMode, setMarketMode] = useState(0)

   return (
     <>

       <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          marginLeft:"0.55em"
        }}
        weight="bold"
      >
        Borrow
      </Text>
        {marketMode==0 ? <>
      <Container>
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
           {tokenList?.map((token, index) => {
              return (
             <Table.Row key={index} >
               
               <Table.Cell css={{display:"flex"}}>
                  <Image width={50} height={50} src={token.img} alt={token.ticker} objectFit="contain"/>
                  <Container css={{display:"flex", flexDirection:"column", margin:"auto"}}>
                     <p >{token.ticker}</p> 
                     <label>{token.name}</label> 
                  </Container>
                  <Button auto light color={"secondary"} css={{marginTop:"4px"}} onPress={() => {setVisible(true);setActiveToken(index);setMarketMode(1)}}>
                    {icons.activity}
                  </Button>
               </Table.Cell>
               <Table.Cell>27.21M</Table.Cell>
               <Table.Cell>0.39%</Table.Cell>
               <Table.Cell>6.98%</Table.Cell>
             </Table.Row>
              )
            })}
           </Table.Body>
         </Table>
      </Container></>
       : <SingleBorrow onChange={(id) => setMarketMode(id)}/>}
       </>
   );
};
