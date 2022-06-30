import {ActionEnum, TypeEnum} from '@app/types/mortgageCalc/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';
import {setCreditAmount} from './creditAmount';
import {setCreditTerm} from './creditTerm';
import {setInitialFee} from './initialFee';
import {setPaymentType} from './paymentType';
import {setPrice} from './price';

const setType = (type: TypeEnum): TMortgageCalcAction => ({
  type: ActionEnum.SET_TYPE,
  payload: type,
});

export {
  setCreditAmount,
  setCreditTerm,
  setInitialFee,
  setPaymentType,
  setPrice,
  setType,
}
