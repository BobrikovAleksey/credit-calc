import {PaymentTypeEnum} from '@app/types/enums';
import {TypeEnum} from './enums';

export interface INumberInputProps {
  id: string;
  label: string;
  length?: number;
  placeholder?: string;
  readOnly?: boolean;
  setValueHandler: Function;
  text?: string;
  value: number;
}

export interface IInputFormState {
  creditAmount: number;
  creditTerm: number;
  initialFee: number;
  paymentType: PaymentTypeEnum;
  price: number;
  rate: number;
  type: TypeEnum;
}
