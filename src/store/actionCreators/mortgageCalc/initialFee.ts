import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setInitialFee = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_INITIAL_FEE,
  payload: value,
});

export const setInitialFeePercent = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_INITIAL_FEE_PERCENT,
  payload: value,
});
