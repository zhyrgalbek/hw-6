import './App.css';
import Block from './components/block/block';
import {useState} from 'react';

function App() {
  const items=[
    {
      text: 'Hello world',
      data: new Date()
    }
  ];
  const [item, setObj] = useState(items);

  function PushItems(obj){
    setObj(()=>{
      return [...item, obj];
    })
  }

  return (
    <div className="App">
      <Block items={item} func = {PushItems} />
    </div>
  );
}

export default App;
