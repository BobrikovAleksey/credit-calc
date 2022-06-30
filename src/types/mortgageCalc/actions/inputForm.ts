import {PaymentTypeEnum, TermTypeEnum} from '@app/types/enums';
import {TypeEnum} from '../enums';
import {ActionEnum} from './enums';

export interface ISetCreditAmountAction {
  type: ActionEnum.SET_CREDIT_AMOUNT;
  payload: number;
}

export interface ISetCreditTermAction {
  type: ActionEnum.SET_CREDIT_TERM;
  payload: number;
}

export interface ISetInitialFeeAction {
  type: ActionEnum.SET_INITIAL_FEE;
  payload: number;
}

export interface ISetInitialFeePercentAction {
  type: ActionEnum.SET_INITIAL_FEE_PERCENT;
  payload: number;
}

export interface ISetPaymentType {
  type: ActionEnum.SET_PAYMENT_TYPE;
  payload: PaymentTypeEnum;
}

export interface ISetPriceAction {
  type: ActionEnum.SET_PRICE;
  payload: number;
}

export interface ISetRateAction {
  type: ActionEnum.SET_RATE;
  payload: number;
}

export interface ISetTermTypeAction {
  type: ActionEnum.SET_TERM_TYPE;
  payload: TermTypeEnum;
}

export interface ISetTypeAction {
  type: ActionEnum.SET_TYPE;
  payload: TypeEnum;
}
