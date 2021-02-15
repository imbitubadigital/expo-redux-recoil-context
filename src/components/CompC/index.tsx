import React, {useCallback} from 'react';
import ButtonLabel from '../ButtonLabel';
import {useTodo} from '../../hooks/tudo';

import * as S from './styles';

const CompC: React.FC = () => {
  const {todo, settingIncrement} = useTodo();
  const Increment = useCallback(() => {
    settingIncrement(1);
  }, []);
  console.log('PASSOU NO compC');
  return (
    <S.Container>
      <S.Title>Hook A</S.Title>
      <ButtonLabel onPress={Increment} value={todo.value1}/>
    </S.Container>
  );
}

export default CompC;