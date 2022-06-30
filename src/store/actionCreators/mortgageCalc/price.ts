import {ActionEnum} from '@app/types/mortgageCalc/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setPrice = (price: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_PRICE,
  payload: price,
});
