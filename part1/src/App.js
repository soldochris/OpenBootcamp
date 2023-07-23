import './App.css';
import Message from './Message.js'

function App() {

  return (
    <div className="App">
      <Message color="red" msg="Estamos Trabajando" />
      <Message color="green" msg="En un curso" />
      <Message color="blue" msg="De React" />
    </div>
  );
}

export default App;
