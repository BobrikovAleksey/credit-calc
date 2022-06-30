import {
  ISetCreditAmountAction,
  ISetCreditTermAction,
  ISetInitialFeeAction,
  ISetPaymentType,
  ISetPriceAction,
  ISetRateAction,
  ISetTypeAction,
} from './inputForm';

export type TMortgageCalcAction =
  ISetCreditAmountAction
  | ISetCreditTermAction
  | ISetInitialFeeAction
  | ISetPaymentType
  | ISetPriceAction
  | ISetRateAction
  | ISetTypeAction;
