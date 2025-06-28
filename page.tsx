import React from 'react';
import { LampDemo } from './components/Herosection';
import CategorySection from './components/Ui/CategorySection';
import Marqee from './components/Marqee';
import Hoby from './components/Ui/Hoby';
import Items from './components/Ui/Items';
import Nots from './components/Ui/Nots';
import Map from './components/Ui/Map';
import Video from './components/Ui/Video';
import Users from './components/Ui/Users';
import Footer from './components/Ui/Footer';

const Page = () => {
  return (
    <>
      <LampDemo />
      <CategorySection />
      <Marqee />
      <Hoby />
      <Items />
      <Nots />
      <Map />
      <Video />
      <Users />
      <Footer />
    </>
  );
}

export default Page;
