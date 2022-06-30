import {FC} from 'react';
import {Card, Nav} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import {TypeEnum} from '@app/types/mortgageCalc/enums';

const Header: FC = () => {
  const { type } = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const { setType } = useActions();

  const handleByPropertyValueClick = () => {
    setType(TypeEnum.BY_PROPERTY_VALUE);
  };

  const handleByLoanAmountClick = () => {
    setType(TypeEnum.BY_LOAN_AMOUNT);
  };

  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey={ type }>
        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ TypeEnum.BY_PROPERTY_VALUE }
                    onClick={ handleByPropertyValueClick }
          >
            По стоимости недвижимости
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ TypeEnum.BY_LOAN_AMOUNT }
                    onClick={ handleByLoanAmountClick }
          >
            По сумме кредита
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
}

export default Header;
