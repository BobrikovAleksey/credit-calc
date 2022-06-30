import {FC} from 'react';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import IntegerField from '@app/components/IntegerField';

const Price: FC = () => {
  const {price} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setPrice} = useActions();
  const id = 'price';
  const label = 'Стоимость недвижимости';

  return (
    <Form.Group className="my-3" controlId={id} as={Row}>
      <Form.Label column sm="4">{label}</Form.Label>

      <Col sm="8">
        <InputGroup>
          <IntegerField
            id={id}
            label={label}
            maxLength={15}
            setValueHandler={setPrice}
            value={price}
          />

          <InputGroup.Text id={`${id}-input-group-text`}>руб.</InputGroup.Text>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Price;
