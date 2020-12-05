/* eslint-disable global-require */
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  CartButton,
  Logo,
  Counter,
  CounterText,
  GoBack,
} from './styles';

const Header = () => {
  const navigation = useNavigation();

  const length = useSelector(state => state.length);

  return (
    <Container>
      <GoBack>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={24}
          color="#ffff"
        />
      </GoBack>
      <Logo
        resizeMode="contain"
        source={require('../../../assets/logo/logo-supera.png')}
      />
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={30} color="#ffff" />
      </CartButton>
      <Counter>
        <CounterText>{length}</CounterText>
      </Counter>
    </Container>
  );
};

export default Header;
