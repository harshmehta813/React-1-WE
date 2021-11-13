import './App.css';
import List from './Component/List';
import styles from "./Component/List.module.css";

function App() {
  return (
    <div className="App App-header">
      <List className={styles.list} />
    </div>
  );
}

export default App;
