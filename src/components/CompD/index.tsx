import React, {useCallback} from 'react';
import ButtonLabel from '../ButtonLabel';
import {useTodo} from '../../hooks/tudo';
import * as S from './styles';

const CompD: React.FC = () => {
  const {todo, settingIncrement} = useTodo();
  const Increment = useCallback(() => {
    settingIncrement(2);
  }, [settingIncrement]);
  console.log('PASSOU NO compD');
  return (
    <S.Container>
      <S.Title>Hook D</S.Title>
      <ButtonLabel onPress={Increment} value={todo.value2} />
    </S.Container>
  );
};

export default CompD;
