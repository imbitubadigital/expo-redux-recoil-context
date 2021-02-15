import {Reducer} from 'redux';
import {TesteValuesState, TesteValuesTypes} from './types';

const INITIAL_STATE: TesteValuesState = {
  data: {
    values1: 0,
    values2: 0,
  },
};

const reducer: Reducer<TesteValuesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TesteValuesTypes.INCREMENT:
      if (action.payload.type === 1) {
        return {
          ...state,
          data: {...state.data, values1: state.data.values1 + 1},
        };
      }
      return {
        ...state,
        data: {...state.data, values2: state.data.values2 + 1},
      };

    default:
      return state;
  }
};

export default reducer;
