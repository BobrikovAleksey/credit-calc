import {TermTypeEnum} from '@app/types/enums';
import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';

export const setCreditTerm = (value: number): TMortgageCalcAction => ({
  type: ActionEnum.SET_CREDIT_TERM,
  payload: value,
});

export const setTermType = (value: TermTypeEnum): TMortgageCalcAction => ({
  type: ActionEnum.SET_TERM_TYPE,
  payload: value,
});
