import {Button, 
Divider, 
Input, 
Text, 
Modal, 
useModal, 
Progress, 
Grid, 
Card,
Row} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";
import tokenList from '../tokenList.json';
import {icons} from '../navbar/icons';
import { useState } from 'react';
import  'chart.js/auto'
import { Chart,Line }            from 'react-chartjs-2'


export const SingleDeposit = ({onChange} : {onChange:any}) => {
  const { setVisible, bindings } = useModal();
   const [activeToken, setActiveToken] = useState(0);
   const [activeChart, setActiveChart] = useState(0);

   const labels = ["January", "February", "March", "April"];
   const data0 = {
      labels: labels,
      datasets: [
        {
          label: 'Stable APR',
          data: [200, 20, 100, 300],
        },
        {
          label: 'Variable APR',
          data: [150, 42, 75, 150],
        }
      ]
    };
   const data1 = {
      labels: labels,
      datasets: [
        {
          label: 'Deposit APR',
          data: [200, 20, 100, 300],
        }
      ]
    };
   const data2 = {
      labels: labels,
      datasets: [
        {
          label: 'Utilization Rate',
          data: [150, 42, 75, 150],
        }
      ]
    };
   return (
     <><Container css={{textAlign: "center"}}>
          <Button auto ghost color="secondary" css={{position:"absolute"}} onClick={() => {
                  onChange(0);
               }}>Back to all</Button>
          <Text id="modal-title" size={18}>
            Deposit  {tokenList[activeToken].ticker} 
          </Text>
       <Spacer y={2} />
      <Table bordered shadow={false} aria-label="My Markets" css={{height: "auto",minWidth: "100",textAlign:"start"}}>
         <Table.Header>
           <Table.Column>0x8..8D3</Table.Column>
           <Table.Column>Wallet Balance</Table.Column>
           <Table.Column>Deposited</Table.Column>
           <Table.Column>Risk Status</Table.Column>
         </Table.Header>

         <Table.Body>
           <Table.Row key="1">
             <Table.Cell>Your wallet</Table.Cell>
             <Table.Cell>781.51M</Table.Cell>
             <Table.Cell>448.77M</Table.Cell>
             <Table.Cell><Progress value={20} shadow color="error" status="secondary" /></Table.Cell>
           </Table.Row>
         </Table.Body>
      </Table>
       <Spacer y={1} />
       <Grid.Container gap={2} justify="center" css={{paddingLeft:"2.5em"}}>
          <Grid xs={6}>
            <Card >
              <Card.Header>
                <Text b>Deposit</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Utilization Rate<Text css={{ float:"right" }}>45.92%</Text></Text>
                <Text>Available liquidity<Text css={{ float:"right" }}>1,452,822.81 {tokenList[activeToken].ticker} </Text></Text>
                <Text>Deposit APY<Text css={{ float:"right" }}>0.03%</Text></Text>
                <Text>Asset price<Text css={{ float:"right" }}>1 USD</Text></Text>
                <Text>Can be collateral<Text css={{ float:"right" }} color="error">No</Text></Text>
              </Card.Body>
              <Card.Footer >
                <Row justify="flex-end">
                  <Input 
                  size="md"
                  css={{  width:"inherit"}}
                  bordered
                    labelRight={tokenList[activeToken].ticker}  
                    placeholder="Deposit Amount (Max 781.51M)" 
                  />
                  <Button css={{marginLeft:"1em"}} color="secondary" size="md">Deposit</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Borrow Statistics</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Maximum LTV<Text css={{ float:"right" }}>-</Text></Text>
                <Text>Liquidation threshold<Text css={{ float:"right" }}>-</Text></Text>
                <Text>Liquidation penalty<Text css={{ float:"right" }}>-</Text></Text>
              <Card.Divider css={{ my: "$10" }}/>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
       
       <Spacer y={2} />
          <Button.Group auto color="gradient" solid>
            <Button onClick={() => {
                  setActiveChart(0);
               }}>Stable vs Variable APR</Button>
          </Button.Group><Spacer y={2} />

          {activeChart== 0 ? <Line data={data0} width={50} height={20} /> : ""}
          {activeChart== 1 ? <Line data={data1} width={50} height={20} /> : ""}
          {activeChart== 2 ? <Line data={data2} width={50} height={20} /> : ""}
       <Spacer y={2} />
    </Container></>
   );
};