import { useSelector, useDispatch } from 'react-redux'
import { Incrementer, Decrementer, Reset } from './config/Action';

export function App() {
  const cpt = useSelector(Z => Z.num)
  const dispatch = useDispatch()
  return (
    <div >
      <h1 >{cpt}</h1>
      <button onClick={() => dispatch(Incrementer())}>Incrementer</button>
      <button onClick={() => dispatch(Decrementer())}>Decrementer</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
}