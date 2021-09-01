import React from 'react';
import Featured from '../components/Home/Featured';
import FlashDeals from '../components/Home/FlashDeals';
import Slider from '../components/Home/Slider';

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <FlashDeals />
    </main>
  );
}
