import AppRouter from '@/router';
import { Provider } from 'react-redux';
import { store } from '@/baseStore';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
