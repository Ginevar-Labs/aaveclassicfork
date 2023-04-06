import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Table } from '@nextui-org/react';
import { Spacer } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Badge } from "@nextui-org/react";
import {Input, Popover, Radio, Modal, message} from 'antd'
import {ArrowDownOutlined, SettingOutlined} from '@ant-design/icons'
import tokenList from '../tokenList.json'
import { useState } from 'react';

export const Swap = () => {
    const [slippage, setSlippage] = useState(2.5)
    const [messageApi, contextHolder] = message.useMessage()
    const [tokenOneAmount, setTokenOneAmount] = useState(0)
    const [tokenTwoAmount, setTokenTwoAmount] = useState(0)
    const [tokenOne, setTokenOne] = useState(tokenList[0])
    const [tokenTwo, setTokenTwo] = useState(tokenList[1])
    const [isOpen, setIsOpen] = useState(false)
    const [changeToken, setChangeToken] = useState(1)
    const [prices, setPrices] = useState({})
    const [txDetails, setTxDetails] = useState({
      to: null, 
      data: null,
      value: null
    })


    const handleSlippage = (e) => {
      setSlippage(e.target.value)
    }

    const changeAmount = (e) => {
      setTokenOneAmount(e.target.value)
      if(e.target.value && prices) {
        setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2))
      } else 
        setTokenTwoAmount(0)
    }

    const switchTokens = () => {
      setPrices(null)
      setTokenOneAmount(0)
      setTokenTwoAmount(0)
      setTokenOne(tokenTwo)
      setTokenTwo(tokenOne)
    }

    const openModal = (token) => {
      setChangeToken(token)
      setIsOpen(true)
    }

    const modifyToken = (i) => {
      setPrices(null)
      setTokenOneAmount(0)
      setTokenTwoAmount(0)
      if (changeToken === 1) {
        setTokenOne(tokenList[i])
      } else {
        setTokenTwo(tokenList[i])
      }
      setIsOpen(false)
    }


    const settingsContent = (
      <>
      <div className='slipp'>Slippage</div>
      <div>
        <Button.Group color="gradient" ghost>
          <Button>0.5%</Button>
          <Button>2.5%</Button>
          <Button>5%</Button>
        </Button.Group>
      </div>
      </>
    )
   return (
     <><Container>
      <Modal open={isOpen} footer={null} onCancel={()=> {setIsOpen(false)}} title="Select a token">
        <div className='modalContent'>
          {tokenList?.map((token, index) => {
            return (
              <div className='tokenChoice' key={index} 
              onClick={() => modifyToken(index)}
              >
                <img src={token.img} alt={token.ticker} className="tokenLogo"/>
                <div className='tokenChoiceNames'>
                  <div className='tokenName'> 
                    {token.name}
                  </div>
                  <div className='tokenTicker'>
                    {token.ticker}
                    </div>
                </div>
                </div>
            )
          })}
        </div>
        </Modal>
    <div className='tradeBox'>
      <div className='tradeBoxHeader'>
       <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          marginTop:"0.5em"
        }}
        weight="bold"
      >
        Trade
      </Text>
        <Popover
        title='Settings'
        trigger='click'
        placement='bottomRight'
        content={settingsContent}
        >
        <SettingOutlined  className='cog'/>
        </Popover>
      </div>
      <div className='inputs'>
      <Input placeholder='0' value={tokenOneAmount} onChange={changeAmount} disabled={!prices}/>
      <Input placeholder='0' value={tokenTwoAmount} disabled={true} />
      <div className="switchButton" onClick={switchTokens}>
        <ArrowDownOutlined className='switchArrow'/>
          </div> 
      <div className='assetOne' onClick={()=> openModal(1)}>
        <img src={tokenOne.img} alt="assetOnelogo" className='logo'/>
        {tokenOne.ticker}
      </div>
      <div className='assetTwo' onClick={()=> openModal(2)}>
      <img src={tokenTwo.img} alt="assetTwologo" className='logo' />
        {tokenTwo.ticker}
      </div>
    </div>
    <div className='swapButton'>
      Swap
      </div>
    </div>
    </Container></>
   );
};
