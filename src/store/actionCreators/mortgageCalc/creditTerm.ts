import {ActionEnum} from '@app/types/mortgageCalc/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setCreditTerm = (creditTerm: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_CREDIT_TERM,
  payload: creditTerm,
});
