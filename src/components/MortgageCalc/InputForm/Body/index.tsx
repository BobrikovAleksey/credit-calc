import {FC} from 'react';
import {Card} from 'react-bootstrap';
import CreditAmount from './CreditAmount';
import CreditTerm from './CreditTerm';
import InitialFee from './InitialFee';
import PaymentType from './PaymentType';
import Price from './Price';
import Rate from './Rate';

const Body: FC = () => {
  return (
    <Card.Body bsPrefix="card-body mx-2">
      <Price />

      <InitialFee />

      <CreditAmount />

      <CreditTerm />

      <Rate />

      <PaymentType />
    </Card.Body>
  );
};

export default Body;
