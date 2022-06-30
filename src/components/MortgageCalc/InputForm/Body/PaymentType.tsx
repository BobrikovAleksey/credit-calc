import {Col, Form, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import {PaymentTypeEnum} from '@app/types/enums';
import {ChangeEvent} from "react";

const PaymentType = () => {
  const {paymentType} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setPaymentType} = useActions();
  const id = 'payment-type';
  const label = 'Тип ежемесячных платежей';

  const annuitedChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.target?.checked && setPaymentType(PaymentTypeEnum.ANNUITED);
  };

  const differentiatedChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.target?.checked && setPaymentType(PaymentTypeEnum.DIFFERENTIATED);
  };

  return (
    <Form.Group className="my-3" controlId={id} as={Row}>
      <Form.Label column sm="4">{label}</Form.Label>

      <Col sm="8">
        <Form.Check
          className="my-2"
          id={`${id}-${PaymentTypeEnum.ANNUITED}`}
          name={id}
          type="radio"
          label="Аннуитетные"
          defaultChecked={paymentType === PaymentTypeEnum.ANNUITED}
          onChange={annuitedChangeHandler}
        />

        <Form.Check
          className="my-2"
          id={`${id}-${PaymentTypeEnum.DIFFERENTIATED}`}
          name={id}
          type="radio"
          label="Дифференцированные"
          defaultChecked={paymentType === PaymentTypeEnum.DIFFERENTIATED}
          onChange={differentiatedChangeHandler}
        />
      </Col>
    </Form.Group>
  );
};

export default PaymentType;
