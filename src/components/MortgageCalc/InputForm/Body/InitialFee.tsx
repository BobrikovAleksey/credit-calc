import {FC} from 'react';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import IntegerField from '@app/components/IntegerField';

const InitialFee: FC = () => {
  const {initialFee, initialFeePercent} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setInitialFee, setInitialFeePercent} = useActions();
  const id = 'initial-fee';
  const label = 'Первоначальный взнос';

  return (
    <>
      <Form.Group className="my-2" controlId={id} as={Row}>
        <Form.Label column sm="4">{label}</Form.Label>

        <Col sm="8">
          <InputGroup>
            <IntegerField
              id={id}
              label={`${label}, руб.`}
              maxLength={15}
              setValueHandler={setInitialFee}
              value={initialFee}
            />

            <InputGroup.Text id={`${id}-input-group-text`}>руб.</InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group className="my-2" controlId={id} as={Row}>
        <Form.Label column sm="4" />

        <Col sm="8">
          <InputGroup>
            <IntegerField
              id={`${id}-percent`}
              label={`${label}, %`}
              maxLength={3}
              setValueHandler={setInitialFeePercent}
              value={initialFeePercent}
            />

            <InputGroup.Text id={`${id}-input-group-text`}>%</InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>
    </>
  );
};

export default InitialFee;
