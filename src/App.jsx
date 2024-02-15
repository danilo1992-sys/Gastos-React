import {GlobalProvider} from './context/GlobalState';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import Balance from './components/Balance';

function App() {
  return (
    <GlobalProvider>
      <Balance />
      <Header />
      <TransactionForm />
        <div>App</div>
    </GlobalProvider>
  )
}

export default App