import {FC} from 'react';
import {Col, Form, InputGroup, Row} from 'react-bootstrap';
import {INumberInputProps} from '@app/types/mortgageCalc/inputForm';
import {DirectiveEnum, TChangeEvent, TKeyboardEvent} from '@app/utils/validator/types';
import {convertNumberToString, convertStringToNumber} from '@app/utils/converters';
import {
  isKeysValid,
  setNumberValueInField,
  specialKeysHandlerForNumeric
} from '@app/utils/validator';

const IntegerField: FC<INumberInputProps> = (props) => {
  const {id, label} = props;

  const keydownHandler = (event: TKeyboardEvent) => {
    if (isKeysValid(event, [DirectiveEnum.nums])) {
      specialKeysHandlerForNumeric(event);
    } else event.preventDefault();
  };

  const inputHandler = (event: TChangeEvent) => {
    const input = event.target;
    const value = convertStringToNumber(input.value ?? '');
    if (value !== null) {
      props.setValueHandler(value);
      setNumberValueInField(input, value);
    } else {
      setNumberValueInField(input, props.value);
      event.preventDefault();
    }
  };

  return (
    <Form.Group as={ Row } className="my-3" controlId={props.id}>
      <Form.Label column sm="4">
        {label}
      </Form.Label>

      <Col sm="8">
        <InputGroup className="mb-3">
          <Form.Control
            inputMode="numeric"
            autoComplete="off"
            maxLength={props.length ?? -1}
            placeholder={props.placeholder ?? ''}
            defaultValue={ convertNumberToString(props.value) }
            onInput={inputHandler}
            onKeyDown={keydownHandler}
            aria-describedby={`${id}-input-group-text`}
            aria-label={label}
          />

          {
            Boolean(props.text)
              && <InputGroup.Text id={`${id}-input-group-text`}>
                {props.text}
              </InputGroup.Text>
          }
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default IntegerField;
