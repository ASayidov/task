import { useRef } from 'react';
import './App.css';
import { Input } from './Input';




function App() {
  const clear = (del) => {
    inputRef.current.value = del;
  };

  return (
    <div className='container'>
      <Input clear={clear} />


    </div>
  );
}

export default App;
