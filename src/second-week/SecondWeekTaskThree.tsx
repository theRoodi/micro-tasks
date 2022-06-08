import {Button} from './component/Button';
import {useState} from 'react';

export const SecondWeekTaskThree = () => {
    let [a , setA] = useState(1)

    const onclickHandler = () => {
        setA(++a)
    }
    const onclickHandlerZero = () => {
        setA(a=0)
    }

    return(
        <div>
          <h1>{a}</h1>
          <button onClick={onclickHandler}>+1</button>
          <button onClick={onclickHandlerZero}>0</button>
        </div>
    )
}