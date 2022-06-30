import {ActionEnum} from '@app/types/mortgageCalc/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setCreditAmount = (creditAmount: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_CREDIT_AMOUNT,
  payload: creditAmount,
});
