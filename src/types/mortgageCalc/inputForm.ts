import {PaymentTypeEnum} from '@app/types/enums';
import {TypeEnum} from './enums';

export interface ICreditAmountProps {
  readOnly?: boolean;
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
