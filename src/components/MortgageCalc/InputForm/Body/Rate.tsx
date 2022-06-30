import {FC} from 'react';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import IntegerField from '@app/components/IntegerField';

const Rate: FC = () => {
  const {rate} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setRate} = useActions();
  const id = 'rate';
  const label = 'Процентная ставка';

  return (
    <Form.Group className="my-3" controlId={id} as={Row}>
      <Form.Label column sm="4">{label}</Form.Label>

      <Col sm="8">
        <InputGroup>
          <IntegerField
            id={id}
            label={label}
            maxLength={5}
            setValueHandler={setRate}
            value={rate}
          />

          <InputGroup.Text id={`${id}-input-group-text`}>%</InputGroup.Text>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Rate;
