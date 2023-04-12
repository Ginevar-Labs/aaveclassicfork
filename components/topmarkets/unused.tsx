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


export const SingleView = ({onChange} : {onChange:any}) => {
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
               }}>Back to all markets</Button>
          <Text id="modal-title" size={18}>
            Reserve status for  {tokenList[activeToken].ticker} 
          </Text>
       <Spacer y={2} />
      <Table bordered shadow={false} aria-label="My Markets" css={{height: "auto",minWidth: "100",textAlign:"start"}}>
         <Table.Header>
           <Table.Column>0x8..8D3</Table.Column>
           <Table.Column>Total Borrowed</Table.Column>
           <Table.Column>Liq Available</Table.Column>
           <Table.Column>Status</Table.Column>
         </Table.Header>

         <Table.Body>
           <Table.Row key="1">
             <Table.Cell>{tokenList[activeToken].ticker} Pool</Table.Cell>
             <Table.Cell>781.51M</Table.Cell>
             <Table.Cell>448.77M</Table.Cell>
             <Table.Cell><Progress value={65} shadow color="secondary" status="secondary" /></Table.Cell>
           </Table.Row>
         </Table.Body>
      </Table>
       <Spacer y={1} />
       <Grid.Container gap={2} justify="center" css={{paddingLeft:"2.5em"}}>
          <Grid xs={4}>
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Deposit</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Deposit APY<Text css={{ float:"right" }}>2.01%</Text></Text>
                <Text>Deposit APR<Text css={{ float:"right" }}>1.23%</Text></Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <Button size="sm" light>
                    Deposit
                  </Button>
                  <Button size="sm">Withdraw</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Stable borrowing</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Borrow APY<Text css={{ float:"right" }}>2.01%</Text></Text>
                <Text>Borrow APR<Text css={{ float:"right" }}>1.23%</Text></Text>
                <Text>Share<Text css={{ float:"right" }}>1.7%</Text></Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <Button size="sm" color="secondary">
                    Borrow
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Variable borrowing</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Borrow APY<Text css={{ float:"right" }}>2.01%</Text></Text>
                <Text>Borrow APR<Text css={{ float:"right" }}>1.23%</Text></Text>
                <Text>Share<Text css={{ float:"right" }}>98.3%</Text></Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="flex-end">
                  <Button size="sm" color="secondary">
                    Borrow
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
       
       <Spacer y={2} />
          <Button.Group auto color="gradient" ghost>
            <Button onClick={() => {
                  setActiveChart(0);
               }}>Stable vs Variable</Button>
            <Button onClick={() => {
                  setActiveChart(1);
               }}>Deposit APR</Button>
            <Button onClick={() => {
                  setActiveChart(2);
               }}>Utilization Rate</Button>
          </Button.Group><Spacer y={2} />

          {activeChart== 0 ? <Line data={data0} width={50} height={20} /> : ""}
          {activeChart== 1 ? <Line data={data1} width={50} height={20} /> : ""}
          {activeChart== 2 ? <Line data={data2} width={50} height={20} /> : ""}
       <Spacer y={2} />
    </Container></>
   );
};