import React from 'react';
import CompA from '../../components/CompA';
import CompB from '../../components/CompB';
import CompC from '../../components/CompC';
import CompD from '../../components/CompD';
import CompE from '../../components/CompE';
import CompF from '../../components/CompF';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <CompA />
      <CompB />
      <CompC />
      <CompD />
      <CompE />
      <CompF />
    </S.Container>
  );
};

export default Home;
