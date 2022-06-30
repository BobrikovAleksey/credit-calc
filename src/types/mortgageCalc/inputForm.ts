import {PaymentTypeEnum, TermTypeEnum} from '@app/types/enums';
import {TypeEnum} from './enums';

export interface IInputFormState {
  creditAmount: number;
  creditTerm: number;
  initialFee: number;
  initialFeePercent: number;
  paymentType: PaymentTypeEnum;
  price: number;
  rate: number;
  termType: TermTypeEnum;
  type: TypeEnum;
}
