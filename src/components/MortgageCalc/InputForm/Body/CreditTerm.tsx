import {FC} from 'react';
import {Col, Dropdown, DropdownButton, Form, InputGroup, Row} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import {TermTypeEnum} from '@app/types/enums';
import IntegerField from '@app/components/IntegerField';

const CreditTerm: FC = () => {
  const {creditTerm, termType} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setCreditTerm, setTermType} = useActions();
  const id = 'credit-term';
  const label = 'Срок кредита';

  const selectHandler = (value: TermTypeEnum.YEARS) => {
    setTermType(value ?? TermTypeEnum.YEARS);
  }

  return (
    <Form.Group className="my-3" controlId={id} as={Row}>
      <Form.Label column sm="4">{label}</Form.Label>

      <Col sm="8">
        <InputGroup>
          <IntegerField
            id={id}
            label={label}
            maxLength={(termType === TermTypeEnum.YEARS) ? 2 : 3}
            setValueHandler={setCreditTerm}
            value={creditTerm}
          />

          <DropdownButton
            id={`${id}-input-group-text`}
            title={(termType === TermTypeEnum.YEARS) ? 'лет ' : 'месяцев '}
            variant="outline-secondary"
            // @ts-ignore
            onSelect={selectHandler}
          >
            <Dropdown.Item eventKey={TermTypeEnum.YEARS}>лет</Dropdown.Item>
            <Dropdown.Item eventKey={TermTypeEnum.MONTHS}>месяцев</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default CreditTerm;
