import {FC, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {useTypedSelector} from '@app/hooks/useTypedSelector';
import {useActions} from '@app/hooks/useActions';
import IntegerField from '@app/components/MortgageCalc/InputForm/Body/IntegerField';

const Body: FC = () => {
  const {price, type} = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const { setPrice } = useActions();

  useEffect(() => {
    console.log(`type: ${type}`);
  }, [type]);

  useEffect(() => {
    console.log(`price: ${price}`);
  }, [price]);

  return (
    <Card.Body bsPrefix="card-body mx-2">
      <IntegerField
        id="price"
        label="Стоимость недвижимости"
        length={15}
        placeholder="Введите стоимость недвижимости"
        text="руб."
        setValueHandler={setPrice}
        value={price}
      />
    </Card.Body>
  );
};

export default Body;
