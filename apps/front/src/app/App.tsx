import AppRouter from '@/app/router';
import { Provider } from 'react-redux';
import { store } from '@/shared/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
