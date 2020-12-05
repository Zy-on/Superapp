import React from 'react';

import { useSelector } from 'react-redux';
import { formatNumber } from '../../utils/formatNumber';

import Header from '../../components/Header';

import {
  Container,
  Content,
  PersonalInfo,
  Welcome,
  Name,
  LastName,
  Street,
  District,
  State,
  City,
  ZipCode,
  FormOfPayment,
  Message,
  CardNumber,
  NameInCard,
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
        <PersonalInfo>
          <Welcome>Falta pouco para receber seu jogo em casa!</Welcome>
          <Name>Nome:</Name>
          <LastName>Sobrenome:</LastName>
          <Street>Rua:</Street>
          <District>Bairro:</District>
          <State>Estado:</State>
          <City>Cidade:</City>
          <ZipCode>CEP:</ZipCode>
        </PersonalInfo>
        <FormOfPayment>
          <Message>Só falta sua forma de pagamento!</Message>
          <CardNumber>Numero do cartão:</CardNumber>
          <NameInCard>Nome impresso no cartão:</NameInCard>
          <ShelfLife>Validade:</ShelfLife>
          <Cvv>Codígo de segurança:</Cvv>
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
          <Button>
            <TextButon>Finalizar pedido</TextButon>
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default CheckOut;
