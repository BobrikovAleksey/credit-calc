import {ActionEnum} from '@app/types/mortgageCalc/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setInitialFee = (initialFee: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_INITIAL_FEE,
  payload: initialFee,
});
