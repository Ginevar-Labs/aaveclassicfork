import {css, Button, Divider, Input, Text, Switch, Card, Link} from '@nextui-org/react';
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

export const Dashboard = () => {
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
        Dashboard
      </Text>
      <Table bordered shadow={false} aria-label="My Markets" css={{height: "auto",minWidth: "100",}}>
         <Table.Header>
           <Table.Column>0x8..8D3</Table.Column>
           <Table.Column>Your Balance</Table.Column>
           <Table.Column>Total Borrowed</Table.Column>
           <Table.Column>Total Deposited</Table.Column>
           <Table.Column>Status</Table.Column>
         </Table.Header>

         <Table.Body>
           <Table.Row key="1">
             <Table.Cell>Your Balance</Table.Cell>
             <Table.Cell>1.23B</Table.Cell>
             <Table.Cell>781.51M</Table.Cell>
             <Table.Cell>0</Table.Cell>
             <Table.Cell><Badge color="warning">DISTRESSED</Badge></Table.Cell>
           </Table.Row>
         </Table.Body>
      </Table>
       <Spacer y={2} />
        <Card variant="bordered">
          <Card.Body>
            <Text>No deposits found, <Link color="secondary" css={{display:"contents"}}>click here</Link> to deposit crypto and earn APY</Text>
          </Card.Body>
        </Card>
    </Container></>
   );
};
