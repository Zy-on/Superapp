/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatNumber } from '../../utils/formatNumber';
import Header from '../../components/Header';

import CodIW from '../../assets/call-of-duty-infinite-warfare.png';
import CodWWII from '../../assets/call-of-duty-wwii.png';
import Fifa18 from '../../assets/fifa-18.png';
import HorizonZD from '../../assets/horizon-zero-dawn.png';
import MortalKombatXL from '../../assets/mortal-kombat-xl.png';
import ShardsOfDarkness from '../../assets/shards-of-darkness.png';
import SuperMarioOdyssey from '../../assets/super-mario-odyssey.png';
import TerraMediaSombras from '../../assets/terra-media-sombras-de-mordor.png';
import TWIII from '../../assets/the-witcher-iii-wild-hunt.png';

import {
  Container,
  Content,
  ProductTable,
  Item,
  ItemInfo,
  HowMany,
  MinusButton,
  Quantity,
  PlusButton,
  RemoveButton,
  TotalValue,
  ProductImage,
  ProductTitle,
  ProductValue,
  Footer,
  FooterInfo,
  OrderSummary,
  SubTotal,
  Button,
  TextButon,
  Total,
  Frete,
} from './styles';

const Cart = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  const cartSelector = useSelector(state => state);

  const totalUpdate = cartSelector.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  const freteUpdate = cartSelector.reduce((frete, product) => {
    if (totalUpdate >= 250) {
      frete = 0;
    } else {
      frete = product.amount * 10;
    }

    return frete;
  }, 0);

  const checkSwitchImage = id => {
    switch (id) {
      case 312:
        return <ProductImage source={SuperMarioOdyssey} />;

      case 201:
        return <ProductImage source={CodIW} />;

      case 102:
        return <ProductImage source={TWIII} />;

      case 99:
        return <ProductImage source={CodWWII} />;

      case 12:
        return <ProductImage source={MortalKombatXL} />;

      case 74:
        return <ProductImage source={ShardsOfDarkness} />;

      case 31:
        return <ProductImage source={TerraMediaSombras} />;

      case 420:
        return <ProductImage source={Fifa18} />;

      case 501:
        return <ProductImage source={HorizonZD} />;

      default:
        return '';
    }
  };

  useEffect(() => {
    setProducts(cartSelector);
  });

  const dispatch = useDispatch();

  function updateAmount(id, amount) {
    return dispatch({
      type: 'UPDATE_AMOUNT',
      id,
      amount,
    });
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  return (
    <Container>
      <Header />
      <Content>
        <ProductTable
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Item>
              {checkSwitchImage(item.id)}
              <ItemInfo>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductValue>
                  R$
                  {item.price}
                </ProductValue>
                <HowMany>
                  <MinusButton>
                    <Icon
                      onPress={() => decrement(item)}
                      name="minus"
                      size={22}
                      color="#000"
                    />
                  </MinusButton>

                  <Quantity>{item.amount}</Quantity>

                  <PlusButton>
                    <Icon
                      onPress={() => increment(item)}
                      name="plus"
                      size={22}
                      color="#000"
                    />
                  </PlusButton>

                  <RemoveButton>
                    <Icon
                      onPress={() => {
                        dispatch({ type: 'REMOVE_FROM_CART', id: item.id });
                      }}
                      name="trash-o"
                      size={22}
                      color="#000"
                    />
                  </RemoveButton>
                </HowMany>
                <TotalValue>
                  Valor total: R$
                  {formatNumber(item.price * item.amount)}
                </TotalValue>
              </ItemInfo>
            </Item>
          )}
        />

        <Footer>
          <FooterInfo>
            <OrderSummary>Resumo do pedido</OrderSummary>
            <SubTotal>
              Subtotal:R$
              {formatNumber(totalUpdate)}
            </SubTotal>
            <Frete>
              Frete: R$
              {formatNumber(freteUpdate)}
            </Frete>
            <Total>
              Total: R$
              {formatNumber(totalUpdate + freteUpdate)}
            </Total>
          </FooterInfo>
          <Button onPress={() => navigation.navigate('CheckOut')}>
            <TextButon>Continuar</TextButon>
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default Cart;
