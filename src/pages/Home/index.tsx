import React from 'react';
import { View, Text } from 'react-native';
import CompA from '../../components/CompA';
import CompB from '../../components/CompB';
import CompC from '../../components/CompC';
import CompD from '../../components/CompD';
import * as S from './styles';

const Home: React.FC = () => {

  return (
  <S.Container>
    <CompA />
    <CompB />
    <CompC />
    <CompD />

    </S.Container>
  );
}

export default Home;