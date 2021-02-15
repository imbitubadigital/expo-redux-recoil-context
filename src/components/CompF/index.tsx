import React, {useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {countIncrement} from '../../store/ducks/testevalues/actions';
import {ApplicationState} from '../../store/';

import ButtonLabel from '../ButtonLabel';
import * as S from './styles';

const CompF: React.FC = () => {
  const dispatch = useDispatch();
  const value2 = useSelector(
    (state: ApplicationState) => state.testevalues.data.values2,
  );
  const increment = useCallback(() => {
    dispatch(countIncrement(2));
  }, [dispatch]);
  console.log('PASSOU NO CompF');
  return (
    <S.Container>
      <S.Title>Redux F</S.Title>
      <ButtonLabel onPress={increment} value={value2} />
    </S.Container>
  );
};

export default CompF;
