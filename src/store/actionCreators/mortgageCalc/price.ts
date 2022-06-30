import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setPrice = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_PRICE,
  payload: value,
});
