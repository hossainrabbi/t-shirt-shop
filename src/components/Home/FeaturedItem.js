import React from 'react';
import { FeaturedItemContent } from '../../styles/Home/Featured.style';

export default function FeaturedItem({ title, desc, image }) {
  return (
    <FeaturedItemContent>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </FeaturedItemContent>
  );
}
