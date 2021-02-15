import React from 'react';
import { PropsButton } from './interfaces';

import * as S from './styles';

const ButtonLabel: React.FC<PropsButton> = ({ onPress, value}) => {
  return (
      <S.Container>
          <S.Btn onPress={onPress}>
              <S.BtnTxt>Incrementar</S.BtnTxt>
          </S.Btn>
          <S.Label>
              <S.LabelTxt>{value}</S.LabelTxt>
          </S.Label>
      </S.Container>
  );
}

export default ButtonLabel;