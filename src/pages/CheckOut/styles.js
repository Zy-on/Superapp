import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #393535;
`;

export const PersonalInfo = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const Welcome = styled.Text`
  color: #fff;
`;

export const Name = styled.TextInput`
  background-color: #fff;
  width: 60%;
`;

export const LastName = styled.TextInput`
  background-color: #fff;
`;

export const Street = styled.TextInput`
  background-color: #fff;
`;

export const District = styled.TextInput`
  background-color: #fff;
`;

export const State = styled.TextInput`
  background-color: #fff;
`;

export const City = styled.TextInput`
  background-color: #fff;
`;

export const ZipCode = styled.TextInput`
  background-color: #fff;
`;

export const FormOfPayment = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.Text`
  color: #fff; ;
`;

export const CardNumber = styled.TextInput`
  background-color: #fff;
`;

export const NameInCard = styled.TextInput`
  background-color: #fff;
`;

export const ShelfLife = styled.TextInput`
  background-color: #fff;
`;

export const Cvv = styled.TextInput`
  background-color: #fff;
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
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  color: #ffff;
`;

export const SubTotal = styled.Text``;

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
