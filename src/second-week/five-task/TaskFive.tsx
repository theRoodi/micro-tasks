import React, {useState} from 'react';
import Input from './Input';
import Button from './Button';

const TaskFive = () => {

    let [message, setMessage] = useState([
        {message: 'msg1'},
        {message: 'msg2'},
        {message: 'msg3'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title:string) => {
        let newMessage = {message:title}
        setMessage([newMessage,...message])
    }

    const addTitle = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addTitle}/>
            {message.map((m, index)=>{
                return(
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    );
};

export default TaskFive;