import React from 'react';
import './Home.css'
import CountDiv from '../CountDiv/CountDiv';
import Banner from '../Banner/Banner';
import TrastedCom from '../TrastedCom/TrastedCom';
import Cards from '../Cards/Cards';
import AboutUs from '../AboutUs/AboutUs';
import HappyAssist from '../HappyAssist/HappyAssist';
import PricingPackege from '../PricingPackege/PricingPackege';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CountDiv></CountDiv>
      <TrastedCom></TrastedCom>
      <Cards></Cards>
      <AboutUs></AboutUs>
      <HappyAssist></HappyAssist>
      <PricingPackege></PricingPackege>
    </div>
  );
};

export default Home;