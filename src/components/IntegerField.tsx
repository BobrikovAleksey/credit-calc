import {FC} from 'react';
import {Form} from 'react-bootstrap';
import {INumberInputProps} from '@app/types/fields';
import {DirectiveEnum, TChangeEvent, TKeyboardEvent} from '@app/utils/validator/types';
import {convertNumberToString, convertStringToNumber} from '@app/utils/converters';
import {
  isKeysValid,
  setNumberValueInField,
  specialKeysHandlerForNumeric
} from '@app/utils/validator';

const IntegerField: FC<INumberInputProps> = (props) => {
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
    <Form.Control
      inputMode="numeric"
      autoComplete="off"
      maxLength={props.maxLength ?? -1}
      placeholder={props.placeholder ?? ''}
      readOnly={props.readOnly}
      defaultValue={convertNumberToString(props.value)}
      onInput={inputHandler}
      onKeyDown={keydownHandler}
      aria-describedby={`${props.id}-input-group-text`}
      aria-label={props.label ?? ''}
    />
  );
};

export default IntegerField;
