import {FC} from 'react';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import IntegerField from '@app/components/IntegerField';

const CreditAmount: FC = () => {
  const {creditAmount} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setCreditAmount} = useActions();
  const id = 'credit-amount';
  const label = 'Сумма кредита';

  return (
    <Form.Group className="my-3" controlId={id} as={Row}>
      <Form.Label column sm="4">{label}</Form.Label>

      <Col sm="8">
        <InputGroup>
          <IntegerField
            id={id}
            label={label}
            maxLength={15}
            setValueHandler={setCreditAmount}
            value={creditAmount}
          />

          <InputGroup.Text id={`${id}-input-group-text`}>руб.</InputGroup.Text>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default CreditAmount;
