import react from 'react'
import './App.css';
import ReactDOM from 'react-dom'
import Left from "./components/Left"
import Right from "./components/Right"

function App() {
  return (
    <>
    <Left />
    <Right />
    </>
  );
}

export default App;
ReactDOM.render(<App/>, document.getElementById('root'));
