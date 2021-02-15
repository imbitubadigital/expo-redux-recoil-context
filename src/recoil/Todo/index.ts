import { atom } from "recoil";

interface PropsTodo  {
  key: string;
  default: {
    value1: number;
    value2: number;
  }
}

export const todoListState = atom({
  key: 'todoListState',
  default: {
    value1: 0,
    value2: 0,
  }
});