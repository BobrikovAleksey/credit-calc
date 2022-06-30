export interface INumberInputProps {
  id: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  setValueHandler: Function;
  value: number;
}
