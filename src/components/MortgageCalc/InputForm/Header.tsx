import {FC} from 'react';
import {Card, Nav} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import {TypeEnum} from '@app/types/mortgageCalc/enums';

const Header: FC = () => {
  const {type} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const {setType} = useActions();

  const byPropertyValueClickHandler = () => {
    setType(TypeEnum.BY_PROPERTY_VALUE);
  };

  const byLoanAmountClickHandler = () => {
    setType(TypeEnum.BY_LOAN_AMOUNT);
  };

  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey={ type }>
        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={TypeEnum.BY_PROPERTY_VALUE}
                    onClick={byPropertyValueClickHandler}
          >
            По стоимости недвижимости
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={TypeEnum.BY_LOAN_AMOUNT}
                    onClick={byLoanAmountClickHandler}
          >
            По сумме кредита
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
}

export default Header;
