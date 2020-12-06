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
  padding: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffff;
  border-radius: 4px;
  margin-bottom: 30px;
  border: 1.5px solid #322e2e;
`;

export const ItemInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HowMany = styled.View`
  flex: 1;
  padding: 2px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.8px;
  border-color: #363232;
`;

export const MinusButton = styled.View`
  padding: 6px;
`;

export const Quantity = styled.Text``;

export const PlusButton = styled.View`
  padding: 6px;
`;

export const RemoveButton = styled.View`
  padding: 6px;
`;

export const ProductImage = styled.Image`
  width: 140px;
  height: 140px;
`;

export const ProductTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  font-family: 'Roboto-Medium';
  border-bottom-width: 0.8px;
  border-color: #363232;
`;

export const ProductValue = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-top: 3px;
  font-family: 'Roboto-Regular';
  border-bottom-width: 0.8px;
  border-color: #363232;
  justify-content: center;
`;

export const TotalValue = styled.Text`
  width: 100%;
  margin-top: 5px;
  text-align: center;
  font-family: 'Roboto-Medium';
  font-size: 17px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 5px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: #494343;
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

export const Freight = styled.Text`
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
