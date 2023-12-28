import { FC } from 'react';
import styles from './App.module.css';

interface AppProps {}

const App: FC<AppProps> = () => (
  <div className={styles.App} data-testid="App">
    App Component
  </div>
);

export default App;
