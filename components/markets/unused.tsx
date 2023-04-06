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

export const SingleView = () => {

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
    </Container></>
   );
};
