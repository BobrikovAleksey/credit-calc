import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setCreditAmount = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_CREDIT_AMOUNT,
  payload: value,
});
