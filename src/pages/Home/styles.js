import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
`;

export const FiltersBox = styled.View`
  background-color: #353535;
`;

export const Filters = styled.View`
  width: 70%;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  background-color: #353535;
`;

export const FilterName = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: #cf6000;
  margin: 7px 7px;
  flex-direction: row;
`;

export const FilterPrice = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: #cf6000;
  margin: 7px 7px;
  flex-direction: row;
`;

export const FilterScore = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: #cf6000;
  margin: 7px 7px;
  flex-direction: row;
`;

export const ProductList = styled.FlatList``;

export const Item = styled.View`
  width: 50%;
  padding: 10px 8px;
  align-items: center;
  justify-content: space-between;
  border: 0.2px solid grey;
`;

export const ItemImg = styled.Image`
  margin-top: 7px;
`;

export const ItemInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-family: 'Roboto-Medium';
  height: 50px;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const ScoreBox = styled.View`
  flex-direction: row;
`;

export const Score = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
`;

export const Buybutton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  height: 44px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  background-color: #cf6000;
`;

export const CartButton = styled.View`
  flex-direction: row;
  border-radius: 4px;
  background-color: #cf5000;
  align-items: center;
  height: 42px;
  width: 39px;
  padding: 3px;
`;

export const ProductAmount = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  font-family: 'Roboto-Medium';
  color: #ffff;
`;

export const ButtonText = styled.Text`
  margin-right: 22px;
  font-size: 13px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  color: #ffff;
`;
