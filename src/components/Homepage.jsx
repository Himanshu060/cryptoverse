import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Row,Col,Statistic, Typography } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(globalStats);
  
  if(isFetching) return 'Loading...';
  return (
    <>
      <Title level={2} className='heading'>Global crypto stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={5}/></Col>
        <Col span={12}><Statistic title="Total Market cap" value={5}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={5}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={5}/></Col>
      </Row>
    </>
  )
}

export default Homepage