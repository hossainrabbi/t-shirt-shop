import React from 'react';
import styled from 'styled-components';
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../../styles/GlobalStyles';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Slider() {
  return (
    <Container>
      <HomeSlider
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url('/assets/images/slider/main-banner-1-898x460.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <SwiperSlide
          style={{
            backgroundImage: `url('/assets/images/slider/main-banner-2-898x460.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </HomeSlider>
    </Container>
  );
}

export const HomeSlider = styled(Swiper)`
  height: 450px;
`;

export const HomeSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
