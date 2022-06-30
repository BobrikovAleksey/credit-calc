import {
  ISetCreditAmountAction,
  ISetCreditTermAction,
  ISetInitialFeeAction,
  ISetInitialFeePercentAction,
  ISetPaymentType,
  ISetPriceAction,
  ISetRateAction,
  ISetTermTypeAction,
  ISetTypeAction,
} from './inputForm';

export type TMortgageCalcAction =
  ISetCreditAmountAction
  | ISetCreditTermAction
  | ISetInitialFeeAction
  | ISetInitialFeePercentAction
  | ISetPaymentType
  | ISetPriceAction
  | ISetRateAction
  | ISetTermTypeAction
  | ISetTypeAction;
