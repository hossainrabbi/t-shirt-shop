import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import {
  Row,
  TopBarIcon,
  TopBarIconLink,
  TopBarStyle,
} from '../../styles/common/TopBar.style';
import { Container, Flex } from '../../styles/GlobalStyles';

export default function TopBar() {
  return (
    <TopBarStyle>
      <Container>
        <Row>
          <p>Free Returns and Free Shipping</p>
          <Flex>
            <TopBarIcon href="tel://+00123456789">
              <FaPhoneAlt /> <span>+00 123 456 789</span>
            </TopBarIcon>
            <TopBarIcon href="mailto://demo@example.com">
              <FaEnvelope />
              <span>demo@example.com</span>
            </TopBarIcon>
            <TopBarIconLink to="/profile">
              <FaUser /> <span>Account</span>
            </TopBarIconLink>
          </Flex>
        </Row>
      </Container>
    </TopBarStyle>
  );
}
