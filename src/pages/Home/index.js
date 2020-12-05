/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  FiltersBox,
  Filters,
  FilterName,
  FilterPrice,
  FilterScore,
  ProductList,
  ItemImg,
  ItemInfo,
  Item,
  Name,
  Price,
  ScoreBox,
  Score,
  Buybutton,
  CartButton,
  ProductAmount,
  ButtonText,
} from './styles';

import productsJson from '../../products.json';

const Home = () => {
  const [products, setProducts] = useState([]);

  const [priceOrder, setPriceOrder] = useState('');

  const [nameOrder, setNameOrder] = useState('');

  const [scoreOrder, setScoreOrder] = useState('');

  const checkSwitchImage = id => {
    switch (id) {
      case 312:
        return <ItemImg source={SuperMarioOdyssey} />;

      case 201:
        return <ItemImg source={CodIW} />;

      case 102:
        return <ItemImg source={TWIII} />;

      case 99:
        return <ItemImg source={CodWWII} />;

      case 12:
        return <ItemImg source={MortalKombatXL} />;

      case 74:
        return <ItemImg source={ShardsOfDarkness} />;

      case 31:
        return <ItemImg source={TerraMediaSombras} />;

      case 420:
        return <ItemImg source={Fifa18} />;

      case 501:
        return <ItemImg source={HorizonZD} />;

      default:
        return '';
    }
  };

  useEffect(() => {
    const response = productsJson;

    setProducts(response);
  }, []);

  const dispatch = useDispatch();

  const handleAddProduct = product => {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  const cartSelector = useSelector(state => state);

  const productAmount = cartSelector.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {});

  const handlePriceSort = () => {
    if (priceOrder === '') {
      const newData = products.sort((a, b) => {
        return a.price - b.price;
      });

      setProducts([...newData]);

      return setPriceOrder('asc');
    }

    const reversedOrder = products.slice(0).reverse();

    setProducts([...reversedOrder]);

    return setPriceOrder(priceOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleNameSort = () => {
    if (nameOrder === '') {
      const newData = products.sort((a, b) => {
        return a.name > b.name;
      });

      setProducts([...newData]);

      return setNameOrder('asc');
    }

    const reversedOrder = products.slice(0).reverse();

    setProducts([...reversedOrder]);

    return setNameOrder(nameOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleScoreSort = () => {
    if (scoreOrder === '') {
      const newData = products.sort((a, b) => {
        return a.score - b.score;
      });

      setProducts([...newData]);

      return setScoreOrder('asc');
    }

    const reversedOrder = products.slice(0).reverse();

    setProducts([...reversedOrder]);

    return setScoreOrder(scoreOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Container>
      <Header />
      <Content>
        <FiltersBox>
          <Filters>
            <FilterName onPress={handleNameSort}>
              <Icon name="font" size={30} color="#ffff" />
              <Icon
                name={nameOrder === 'asc' ? 'long-arrow-down' : 'long-arrow-up'}
                size={30}
                color="#ffff"
              />
            </FilterName>
            <FilterPrice onPress={handlePriceSort}>
              <Icon name="dollar" size={30} color="#ffff" />
              <Icon
                name={
                  priceOrder === 'asc' ? 'long-arrow-down' : 'long-arrow-up'
                }
                size={30}
                color="#ffff"
              />
            </FilterPrice>
            <FilterScore onPress={handleScoreSort}>
              <Icon name="star" size={30} color="#ffff" />
              <Icon
                name={
                  scoreOrder === 'asc' ? 'long-arrow-down' : 'long-arrow-up'
                }
                size={30}
                color="#ffff"
              />
            </FilterScore>
          </Filters>
        </FiltersBox>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <Item key={item.id}>
              {checkSwitchImage(item.id)}
              <ItemInfo>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
                <ScoreBox>
                  <Score>Score:</Score>
                  <Icon name="star" size={17} color="#ffbf00" />
                  <Score>{item.score}</Score>
                </ScoreBox>
              </ItemInfo>
              <Buybutton
                onPress={() => {
                  handleAddProduct(item);
                }}
              >
                <CartButton>
                  <Icon name="cart-plus" size={20} color="#ffff" />
                  <ProductAmount>{productAmount[item.id] || 0}</ProductAmount>
                </CartButton>

                <ButtonText>Adicionar ao carrinho</ButtonText>
              </Buybutton>
            </Item>
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
