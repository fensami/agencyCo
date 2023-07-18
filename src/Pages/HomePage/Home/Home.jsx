import React from 'react';
import './Home.css'
import CountDiv from '../CountDiv/CountDiv';
import Banner from '../Banner/Banner';
import TrastedCom from '../TrastedCom/TrastedCom';
import Cards from '../Cards/Cards';
import AboutUs from '../AboutUs/AboutUs';
import HappyAssist from '../HappyAssist/HappyAssist';
import PricingPackege from '../PricingPackege/PricingPackege';
import ContactUs from '../ContactUs/ContactUs';
import DiscoverAgency from '../DiscoverAgency/DiscoverAgency';
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
      <ContactUs></ContactUs>
      <DiscoverAgency></DiscoverAgency>
    </div>
  );
};

export default Home;