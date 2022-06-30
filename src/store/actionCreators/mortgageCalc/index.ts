import {TypeEnum} from '@app/types/mortgageCalc/enums';
import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';
import {setCreditAmount} from './creditAmount';
import {setCreditTerm, setTermType} from './creditTerm';
import {setInitialFee, setInitialFeePercent} from './initialFee';
import {setPaymentType} from './paymentType';
import {setPrice} from './price';
import {setRate} from './rate';

const setType = (type: TypeEnum): TMortgageCalcAction => ({
  type: ActionEnum.SET_TYPE,
  payload: type,
});

export {
  setCreditAmount,
  setCreditTerm,
  setInitialFee,
  setInitialFeePercent,
  setPaymentType,
  setPrice,
  setRate,
  setTermType,
  setType,
}
