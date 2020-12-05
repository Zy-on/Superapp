import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #222222;
`;

export const GoBack = styled.TouchableOpacity`
  margin-left: 3px;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 33px;
  align-self: center;
  justify-content: center;
`;

export const CartButton = styled.TouchableOpacity``;

export const Counter = styled.View`
  height: 16px;
  width: 16px;
  position: absolute;
  border-radius: 20px;
  background-color: #cf6000;
  margin-top: 3px;
  margin-left: 375px;
`;

export const CounterText = styled.Text`
  color: #ffff;
  align-self: center;
  font-family: Roboto-Medium;
  font-size: 10px;
`;
