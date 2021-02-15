import React, {useCallback} from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {todoListState} from '../../recoil/Todo'
import ButtonLabel from '../ButtonLabel';

import * as S from './styles';

const CompB: React.FC = () => {
  const [todo, setTodo] = useRecoilState(todoListState);
  const Increment = useCallback(() => {
    setTodo(oldTodo => {
      return {
        ...oldTodo,
        value2: todo.value2 + 1,
      }
    });
  }, []);

  console.log('PASSOU NO compB');
  return (
    <S.Container>
      <S.Title>Recoil B</S.Title>
      <ButtonLabel onPress={Increment} value={todo.value2}/>
    </S.Container>
  );
}

export default CompB;