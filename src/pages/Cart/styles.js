import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #393535;
`;

export const ProductTable = styled.FlatList`
  flex: 1;
`;

export const Item = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffff;
  border-radius: 4px;
  margin-bottom: 30px;
  border: 1.5px solid #cf6000;
`;

export const ItemInfo = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const HowMany = styled.View`
  flex: 1;
  padding: 3px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

export const MinusButton = styled.View``;

export const Quantity = styled.Text``;

export const PlusButton = styled.View``;

export const RemoveButton = styled.View``;

export const TotalValue = styled.Text`
  width: 100%;
  margin-top: 20px;
  font-family: 'Roboto-Medium';
  font-size: 17px;
  align-self: center;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  height: 150px;
`;

export const ProductTitle = styled.Text`
  width: 100%;
  font-size: 17px;
  font-family: 'Roboto-Medium';
`;

export const ProductValue = styled.Text`
  padding: 2px;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const Footer = styled.View`
  width: 100%;
  padding: 5px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: #353535;
  border: 0.4px solid white;
`;

export const FooterInfo = styled.View`
  border-radius: 20px;
  margin-left: 4px;
`;

export const OrderSummary = styled.Text`
  padding: 8px;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  color: #ffff;
  border-bottom-width: 1px;
  border-color: white;
`;

export const SubTotal = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Regular';
  color: #ffff;
`;

export const Frete = styled.Text`
  font-size: 15px;
  font-family: 'Roboto-Regular';
  color: #ffff;
`;

export const Total = styled.Text`
  padding-bottom: 4px;
  font-size: 19px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
  color: #ffff;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  height: 45px;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #cf6000;
`;

export const TextButon = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  color: #ffff;
`;
