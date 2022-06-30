import {PaymentTypeEnum} from '@app/types/enums';
import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setPaymentType = (type: PaymentTypeEnum): TMortgageCalcAction => ({
  type: ActionEnum.SET_PAYMENT_TYPE,
  payload: type,
});
