/**
 * Actions types
 */

export enum TesteValuesTypes {
  INCREMENT = '@testevalues/INCREMENT',
}

/**
 * Data types
 */
export interface Values {
  values1: number;
  values2: number;
}

/**
 * Stare types
 */

export interface TesteValuesState {
  readonly data: Values;
}
