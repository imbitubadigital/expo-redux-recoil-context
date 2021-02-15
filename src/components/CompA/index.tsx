import React, {useCallback} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ButtonLabel from '../ButtonLabel';
import {todoListState} from '../../recoil/Todo'

import * as S from './styles';

const CompA: React.FC = () => {
  const [todo, setTodo] = useRecoilState(todoListState);

  const Increment = useCallback(() => {
      setTodo(oldTodo => {
        return {
         ...oldTodo,
          value1: todo.value1 + 1,
        }
      });
  }, []);

  console.log('PASSOU NO compA');

  return (
    <S.Container>
      <S.Title>Recoil A</S.Title>
      <ButtonLabel onPress={Increment} value={todo.value1}/>
    </S.Container>
  );
}

export default CompA;