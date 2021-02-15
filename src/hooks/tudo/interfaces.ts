export interface PropsTodo {
  value1: number;
  value2: number;
}

export interface TodoContextData {
  todo: PropsTodo;
  settingIncrement: (type: number) => void;
}
