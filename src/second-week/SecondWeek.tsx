import React from 'react';


// const subscriber = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log("Hello 1")
// }
// const subscriber2 = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log("hello 2")
// }

const onClickHandler = (name: string) => {
    alert(name)
}


export function SecondWeek() {
    return (
       <div>
           {/*<button onClick={(e) => {*/}
           {/*    console.log('Hello world!')*/}
           {/*}}>BTN</button>*/}
           <button onClick={() => onClickHandler('Rick')}>Morty</button>
           <button onClick={() => onClickHandler('Morty')}>Rick</button>
       </div>
    )
}