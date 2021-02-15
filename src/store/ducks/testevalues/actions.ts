import {action} from 'typesafe-actions';
import {TesteValuesTypes} from './types';

export const countIncrement = (type: number) =>
  action(TesteValuesTypes.INCREMENT, {type});
