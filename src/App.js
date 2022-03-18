import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState } from 'react';
import Menubar from './component/Menubar/Menubar';
import LoadCard from './component/LoadCard/LoadCard';

function App() {
  const [count, setCount] = useState(0)
  const addCount =()=> setCount(count + 1);
  console.log(count)
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <h1 className='mt-5'>All Product</h1>
      <LoadCard addCount ={addCount}></LoadCard>
    </div>
  );
}
export default App;
