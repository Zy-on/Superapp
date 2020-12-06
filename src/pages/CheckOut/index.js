import React from 'react';

import { useSelector } from 'react-redux';
import { formatNumber } from '../../utils/formatNumber';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Welcome,
  InfoHeader,
  PersonalInfo,
  Name,
  LastName,
  Street,
  HouseInfo,
  HouseNumber,
  Complement,
  District,
  State,
  City,
  ZipCode,
  FormOfPayment,
  Message,
  CardNumber,
  NameInCard,
  SmallInfo,
  ShelfLife,
  Cvv,
  Footer,
  FooterInfo,
  OrderSummary,
  SubTotal,
  Frete,
  Total,
  Button,
  TextButon,
} from './styles';

const CheckOut = () => {
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

  return (
    <Container>
      <Header />
      <Content>
        <Welcome>Falta pouco para receber seu jogo em casa!</Welcome>
        <InfoHeader>Informe seus dados pessoais:</InfoHeader>
        <PersonalInfo>
          <Name placeholder="Nome" />
          <LastName placeholder="Sobrenome" />
          <Street placeholder="Rua" />
          <HouseInfo>
            <HouseNumber placeholder="Numero" />
            <Complement placeholder="Complemento" />
          </HouseInfo>
          <District placeholder="Bairro" />
          <State placeholder="Estado" />
          <City placeholder="Cidade" />
          <ZipCode placeholder="CEP" />
        </PersonalInfo>
        <FormOfPayment>
          <Message>Só falta sua forma de pagamento:</Message>
          <CardNumber placeholder="Numero do cartão" />
          <NameInCard placeholder="Nome impresso no cartão" />
          <SmallInfo>
            <ShelfLife placeholder="Validade" />
            <Cvv placeholder="CVV" />
          </SmallInfo>
        </FormOfPayment>
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
        </Footer>
        <Button
          onPress={() => {
            alert('Pedido realizado!');
          }}
        >
          <TextButon>Finalizar pedido</TextButon>
        </Button>
      </Content>
    </Container>
  );
};

export default CheckOut;
