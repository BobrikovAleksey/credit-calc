import {FC} from 'react';
import {Card} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';

const Body: FC = () => {
  const { type } = useTypedSelector((state) => state.mortgageCalc.inputForm);
  console.log(type);

  return (
    <Card.Body bsPrefix="card-body mx-2">

    </Card.Body>
  );
};

export default Body;
