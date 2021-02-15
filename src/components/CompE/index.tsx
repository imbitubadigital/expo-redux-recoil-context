import React, {useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {countIncrement} from '../../store/ducks/testevalues/actions';
import {ApplicationState} from '../../store/';

import ButtonLabel from '../ButtonLabel';
import * as S from './styles';

const CompE: React.FC = () => {
  const dispatch = useDispatch();
  const value1 = useSelector(
    (state: ApplicationState) => state.testevalues.data.values1,
  );
  const increment = useCallback(() => {
    dispatch(countIncrement(1));
  }, [dispatch]);
  console.log('PASSOU NO CompE');
  return (
    <S.Container>
      <S.Title>Redux E</S.Title>
      <ButtonLabel onPress={increment} value={value1} />
    </S.Container>
  );
};

export default CompE;
