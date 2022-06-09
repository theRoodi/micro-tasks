import React, {useState} from 'react';
import UniInput from './UniInput';
import Input from './Input';
import Button from './Button';

const SecondWeekTaskFive = () => {
    let [message, setMessage] = useState([
        {message: 'msg1'},
        {message: 'msg2'},
        {message: 'msg3'},
    ])

    const addMessage = (title: string) => {
        let newTitle = {message: title}
        setMessage([newTitle, ...message])
    }

    return (
        <div className="second">
            {/*<UniInput addMessage={addMessage} />*/}

            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    );
};

export default SecondWeekTaskFive;