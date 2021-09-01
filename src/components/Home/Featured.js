import React from 'react';
import featuredData from '../../data/featured.data';
import { Container } from '../../styles/GlobalStyles';
import { Row } from '../../styles/Home/Featured.style';
import FeaturedItem from './FeaturedItem';

export default function Featured() {
  return (
    <section>
      <Container>
        <Row>
          {featuredData.map((item) => (
            <FeaturedItem {...item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
