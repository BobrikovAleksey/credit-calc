import {PaymentTypeEnum, TermTypeEnum} from '@app/types/enums';
import {TypeEnum} from '@app/types/mortgageCalc/enums';
import {ActionEnum} from '@app/types/mortgageCalc/actions/enums';
import {TMortgageCalcAction} from '@app/types/mortgageCalc/actions';
import {IInputFormState} from '@app/types/mortgageCalc/inputForm';

const initialState: IInputFormState = {
  creditAmount: 0,
  creditTerm: 0,
  initialFee: 0,
  initialFeePercent: 0,
  paymentType: PaymentTypeEnum.DIFFERENTIATED,
  price: 0,
  rate: 0,
  termType: TermTypeEnum.MONTHS,
  type: TypeEnum.BY_PROPERTY_VALUE,
};

export const inputFormReducer = (state = initialState, action: TMortgageCalcAction): IInputFormState => {
  switch (action.type) {
    default:
      return state;
    case ActionEnum.SET_CREDIT_AMOUNT:
      return { ...state, creditAmount: action.payload };
    case ActionEnum.SET_CREDIT_TERM:
      return { ...state, creditTerm: action.payload };
    case ActionEnum.SET_INITIAL_FEE:
      return { ...state, initialFee: action.payload };
    case ActionEnum.SET_INITIAL_FEE_PERCENT:
      return { ...state, initialFeePercent: action.payload };
    case ActionEnum.SET_PAYMENT_TYPE:
      return { ...state, paymentType: action.payload };
    case ActionEnum.SET_PRICE:
      return { ...state, price: action.payload };
    case ActionEnum.SET_RATE:
      return { ...state, rate: action.payload };
    case ActionEnum.SET_TERM_TYPE:
      return { ...state, termType: action.payload };
    case ActionEnum.SET_TYPE:
      return { ...state, type: action.payload };
  }
}
