import {FC, FormEvent} from 'react';
import {Card, Form} from 'react-bootstrap';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const InputForm: FC = () => {
  const submitHandler = (event: FormEvent<HTMLElement>) => {
    console.log('submit');
    event.preventDefault();
  };

  return (
    <Card>
      <Header />

      <Form
        onSubmit={submitHandler}>
        <Body />

        <Footer />
      </Form>
    </Card>
  );
}

export default InputForm;
