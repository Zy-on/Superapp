import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: #393535;
`;

export const PersonalInfo = styled.View`
  width: 80%;
`;

export const Welcome = styled.Text`
  color: #fff;
  text-align: center;
  font-family: 'Roboto-Bold';
  font-size: 20px;
  margin: 20px;
`;

export const InfoHeader = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 17px;
  margin: 20px;
`;

export const Name = styled.TextInput`
  background-color: #fff;
  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const LastName = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const Street = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const HouseInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HouseNumber = styled.TextInput`
  background-color: #fff;
  width: 35%;
  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const Complement = styled.TextInput`
  background-color: #fff;
  width: 60%;
  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const District = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const State = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const City = styled.TextInput`
  background-color: #fff;
  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const ZipCode = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const FormOfPayment = styled.View`
  width: 80%;
  margin: 50px;
`;

export const Message = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  margin: 20px;
`;

export const CardNumber = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const NameInCard = styled.TextInput`
  background-color: #fff;

  height: 50px;
  padding: 0 16px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const SmallInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ShelfLife = styled.TextInput`
  background-color: #fff;
  width: 35%;
  height: 50px;
  padding: 0 10px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const Cvv = styled.TextInput`
  background-color: #fff;
  width: 35%;
  height: 50px;
  padding: 0 10px;
  border-radius: 18px;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  width: 90%;
  margin: 20px;
  padding: 10px;
  background-color: #494343;
  border-radius: 10px;
  border: 0.4px solid white;
`;

export const FooterInfo = styled.View`
  width: 100%;
  align-self: center;
`;

export const OrderSummary = styled.Text`
  text-align: center;
  margin-bottom: 40px;
  font-size: 18px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  color: #ffff;
  border-bottom-width: 0.7px;
  border-color: white;
`;

export const SubTotal = styled.Text`
  margin-left: 3px;
  font-size: 17px;
  font-family: 'Roboto-Regular';
  color: #ffff;
`;

export const Frete = styled.Text`
  margin-top: 1px;
  margin-left: 3px;
  font-size: 15px;
  font-family: 'Roboto-Regular';
  color: #ffff;
`;

export const Total = styled.Text`
  margin-top: 1px;
  margin-left: 3px;
  font-size: 19px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
  color: #ffff;
`;

export const Button = styled(RectButton)`
  height: 45px;
  width: 95%;
  margin: 20px;
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
