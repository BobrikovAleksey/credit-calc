import { FC } from 'react';
import MortgageCalc from '@app/components/MortgageCalc';

const App: FC = () => {
  return (
    <div className="container">
      <h1 className="my-4">Ипотечный калькулятор</h1>

      <MortgageCalc />
    </div>
  );
}

export default App;
