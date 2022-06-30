import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setRate = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_RATE,
  payload: value,
});
